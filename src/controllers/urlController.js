import { v4 as uuid } from 'uuid';
import { connection } from '../database.js';

export async function shortenUrl(req, res){
	try{
		const user = res.locals.user;
		const {url} = req.body;
		const shorty = uuid().slice(0,7);

		await connection.query(`
			INSERT INTO links
			("userId", link, shortened)
			VALUES
			($1, $2, $3)
		`, [user.id, url, shorty]);

		res.status(201).send(shorty);
	}catch(error){
		console.log(error);
		res.sendStatus(500);
	}
}