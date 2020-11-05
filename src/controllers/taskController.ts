import { Request, Response } from "express";
import { Task, ITask } from "../models/task";

/* let tasks : ITask[] = [{
  title: 'Task A',
  description: 'Description for A! '
},
{
  title: 'Task B',
  description: 'Description for B! '
}] */

export const getTasks = async (req: Request, res: Response) => {
  console.log(req.body)
  const tasks: ITask[] = await Task.find();

  res.status(200).json({
    success: true,
    data: tasks
  });
};

export const postAddTask = async (req: Request, res: Response) => {
  console.log('postAddTask')
  console.log(req.body)
  const { title, description } = req.body;
  const task: ITask = new Task({
    title: title,
    description: description,
  });

  // tasks.push(newTask);
  await task.save();

  res.json({
    success: true
  });
};