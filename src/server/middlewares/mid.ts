import express, { Express } from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import mogran from 'morgan';
import { context } from './context';

export const connectMiddlewares = (app: Express) => {
	app.use([
		cors(),
		context,
		methodOverride('_method'),
		express.static('public'),
		express.json(),
		express.urlencoded({ extended: false }),
		mogran('dev'),
	]);
};
