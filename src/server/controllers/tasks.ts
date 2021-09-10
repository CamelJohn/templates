import { Request, Response } from 'express';
import TaskDAL from '../../database/DAL/tasks';
import { CreateTaskRequest, UpdateTaskRequest } from './interfaces';

export class TasksController {
	private static toNum(string: string) {
		return Number(string);
	}

	static async all(req: Request, res: Response) {
		try {
			const tasks = await TaskDAL.all();
			res.status(200).json({ tasks });
		} catch (e) {
			throw e;
		}
	}

	static async getById(req: Request, res: Response) {
		try {
			const taskId = TasksController.toNum(req.params.taskId);
			const task = await TaskDAL.byId(taskId);
			res.status(200).json({ task });
		} catch (e) {
			throw e;
		}
	}

	static async create(req: CreateTaskRequest, res: Response) {
		try {
			const newTask = await TaskDAL.create(req.body);
			res.status(201).json({ task: newTask });
		} catch (e) {
			throw e;
		}
	}

	static async edit(req: UpdateTaskRequest, res: Response) {
		try {
			const taskId = TasksController.toNum(req.params.taskId);
			const updatedTask = await TaskDAL.update(taskId, req.body);
			res.status(203).json({ task: updatedTask });
		} catch (e) {
			throw e;
		}
	}

	static async delete(req: Request, res: Response) {
		try {
			const taskId = TasksController.toNum(req.params.taskId);
			const task = await TaskDAL.delete(taskId);
			res.status(200).json({ task });
		} catch (e) {
			throw e;
		}
	}
}
