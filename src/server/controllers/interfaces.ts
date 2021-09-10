import { Request } from 'express';
import { TaskDTO } from '../../database/interfaces';

interface CreateTaskRequest extends Request {
	body: TaskDTO;
}

interface UpdateTaskRequest extends Request {
	body: Partial<TaskDTO>;
}

export { CreateTaskRequest, UpdateTaskRequest };
