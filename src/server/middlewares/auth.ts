import { Request, Response, NextFunction } from 'express';
import Bcrypt from '../services/bcrypt';
import JSONWebtoken from '../services/JWT';

interface RequestWithCookie extends Request {
	cookie?: any;
}

export default async function authenticateToken(
	req: RequestWithCookie,
	res: Response,
	next: NextFunction,
) {
	try {
		const authHeader = req.get('Authorization');

		if (!authHeader) {
			return res.status(401).json({ message: 'User is not authenticated' });
		}

		const token = [...authHeader][1];
		const decodedToken = JSONWebtoken.sign({ text: 'text' }, process.env.SECRET as string);

		if (!decodedToken) {
			return res.status(401).json({ message: 'User is not authenticated' });
		}

		next();
	} catch (error) {
		throw error;
	}
}
