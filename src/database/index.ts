import { Options, Sequelize } from 'sequelize';
import env from 'dotenv';

export default class Database {
	private static getConfig() {
		return env.config();
	}

	static get DBConnectWithParams(): Options {
		const config = Database.getConfig();

		if (config.error || !config.parsed) {
			return {
				database: '',
				username: '',
				password: '',
				logging: false,
				dialect: 'postgres',
				define: {
					freezeTableName: true,
					timestamps: false,
				},
			};
		}

		const {
			DB_NAME: database,
			DB_USERNAME: username,
			DB_PASSWORD: password,
		} = Object.fromEntries(Object.entries(config.parsed));

		return {
			database,
			username,
			password,
			logging: false,
			dialect: 'postgres',
			define: {
				freezeTableName: true,
				timestamps: false,
			},
		};
	}

	static instance(options: Options) {
		return new Sequelize(options);
	}

	static async connect() {
		try {
			const config = Database.DBConnectWithParams;
			const db = Database.instance(config);
			await db.authenticate();
			await db.sync();
			console.log('Connected to database', db.config.database);
		} catch (e) {
			console.error(e);
		}
	}
}
