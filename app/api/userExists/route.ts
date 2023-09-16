import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/app/lib/mongodb';
import User from '@/app/models/user';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select('_id');
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error on userExits API endpoint : ', error);
  }
}
