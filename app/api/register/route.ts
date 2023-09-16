import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/app/lib/mongodb';
import User from '@/app/models/user';

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    await User.create({ firstname, lastname, email, password: hashedPassword });

    return NextResponse.json({ message: 'User Registered' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occured while registering the user' }, { status: 500 });
  }
}
