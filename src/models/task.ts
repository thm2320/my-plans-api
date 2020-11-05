import { Model, model, Schema } from "mongoose";
import { Document } from "mongoose";

export interface ITask extends Document {
  title: string,
  description: string,
}

const taskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },


  },
  { timestamps: true }
)

export const Task: Model<ITask> = model("Task", taskSchema);