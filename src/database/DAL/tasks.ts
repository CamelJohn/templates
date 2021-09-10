import { TaskDTO } from '../interfaces';
import Task from '../models/tasks';

export default class TaskDAL {
	static async all() {
		try {
			return await Task.findAll({ raw: true });
		} catch (e) {
			throw e;
		}
	}

	static async byId(taskId: number) {
		try {
			return await Task.findOne({ raw: true, where: { id: taskId } });
		} catch (e) {
			throw e;
		}
	}

	static async create(taskDTO: TaskDTO) {
		try {
			return await Task.findCreateFind({ where: { ...taskDTO } });
		} catch (e) {
			throw e;
		}
	}

	static async update(taskId: number, taskDTO: Partial<TaskDTO>) {
		try {
			return await Task.update({ ...taskDTO }, { where: { id: taskId } });
		} catch (e) {
			throw e;
		}
	}

	static async delete(taskId: number) {
		try {
			return await Task.destroy({ where: { id: taskId } });
		} catch (e) {
			throw e;
		}
	}
}
