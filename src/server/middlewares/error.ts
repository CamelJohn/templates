import { NextFunction, Request, Response } from 'express';

export function _error(error: Error, req: Request, res: Response, next: NextFunction) {
	return res.status(500).json({ message: error.message, name: error.name, callStack: error.stack });
}
