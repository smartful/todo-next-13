import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Task from '@/app/models/task';

export async function GET(request: Request) {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json({ tasks });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Unable to retreive tasks' }, { status: 500 });
  }
}
