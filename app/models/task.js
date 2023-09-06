import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    deadline: {
      type: Date,
    },
    subtasks: [
      {
        name: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;
