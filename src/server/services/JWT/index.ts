import JWT from 'jsonwebtoken';

export default class JSONWebtoken {
	static sign(data: any, secret: string) {
		return JWT.sign(data, secret);
	}

	static decode(token: string, secret: any) {
		return JWT.decode(token, secret);
	}
}
