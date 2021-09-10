import express from 'express';
import { TasksController } from '../controllers';

const tasks = express.Router();

tasks.get('/', TasksController.all);

tasks.get('/:taskId', TasksController.getById);

tasks.post('/', TasksController.create);

tasks.put('/:taskId', TasksController.edit);

tasks.delete('/:taskId', TasksController.delete);

export { tasks };
