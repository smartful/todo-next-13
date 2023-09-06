import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Firstname is required'],
    },
    lastname: {
      type: String,
      required: [true, 'Lastname is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
