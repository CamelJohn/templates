import { DataTypes } from 'sequelize';
import Database from '../';

const config = Database.DBConnectWithParams;
const DB = Database.instance(config);

const Task = DB.define('Task', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	categoryId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	statusId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

Task.sync();

export default Task;
