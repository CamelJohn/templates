import { Request, Response, NextFunction } from 'express';

interface RequestWithContext extends Request {
	context?: any;
}

export default function context(req: RequestWithContext, res: Response, next: NextFunction) {
	req.context = {};
	return next();
}
