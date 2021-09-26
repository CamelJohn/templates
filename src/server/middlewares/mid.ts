import express, { Express } from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import mogran from 'morgan';
import context from './context';
import cookeParser from 'cookie-parser';
import auth from './auth';
import authenticateToken from './auth';

export const connectMiddlewares = (app: Express) => {
	app.use([
		cors(),
		cookeParser(),
		auth,
		context,
		authenticateToken,
		methodOverride('_method'),
		express.static('public'),
		express.json(),
		express.urlencoded({ extended: false }),
		mogran('dev'),
	]);
};
