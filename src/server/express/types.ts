import createServer from 'connect';
import cors from 'cors';

type StatusCode = number | undefined;
type Req = cors.CorsRequest;
type Next = (err?: any) => any;
type ExpressMiddleware = (req: Req, res: Res, next: Next) => void;

interface Res {
	statusCode?: StatusCode;
	setHeader(key: string, value: string): any;
	end(): any;
}

export type Middleware = createServer.NextHandleFunction | ExpressMiddleware;
