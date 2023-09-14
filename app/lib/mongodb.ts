import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0 && process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('DB connected');
    }
  } catch (error) {
    console.error(error);
  }
};
