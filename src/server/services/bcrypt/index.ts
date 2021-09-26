import bcrypt from 'bcryptjs';

export default class Bcrypt {
	static async signup(password: string) {
		return await bcrypt.hash(password, await bcrypt.genSalt(10));
	}

	static async comparePasswords(inputPassword: string, databasePassword: string) {
		return await bcrypt.compare(inputPassword, databasePassword);
	}
}
