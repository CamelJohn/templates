import express from 'express';
import { _error, connectMiddlewares } from '../middlewares';
import { tasks } from '../routes';

import { Middleware } from './types';
import Database from '../../database/index';

export default class Server {
	private static App = express();
	private static PORT = process.env.PORT || 8080;

	private static use(middleware: Middleware[] | any) {
		Server.App.use(middleware);
	}

	private static useRouter(route: string, router: any) {
		Server.App.use(route, router);
	}

	private static async listen() {
		try {
			await Server.App.listen(Server.PORT);
			console.log('Server listening on port', Server.PORT);
			await Database.connect();
		} catch (e) {
			console.error(e);
		}
	}

	static async connect() {
		try {
			connectMiddlewares(Server.App);
			Server.useRouter('/tasks', tasks);
			Server.use(_error);
			await Server.listen();
		} catch (e) {
			console.error(e);
		}
	}
}
