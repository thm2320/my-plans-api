import { Request, Response } from "express";
import { Task, ITask } from "../models/task";

export const getTasks = async (req: Request, res: Response) => {
  const tasks: ITask[] = await Task.find();

  res.status(200).json({
    success: true,
    data: tasks
  });
};

export const getTask = async (req: Request, res: Response) => {
  const id = req.params.id
  const task: ITask | null = await Task.findById(id);

  res.status(200).json({
    success: true,
    data: task
  });
};

export const postAddTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task: ITask = new Task({
    title: title,
    description: description,
  });

  await task.save();

  res.json({
    success: true
  });
};

export const postUpdateTask = async (req: Request, res: Response) => {
  const { _id, title, description } = req.body;
  await Task.findByIdAndUpdate(_id, {
    title: title,
    description: description
  })

  res.json({
    success: true
  });
};