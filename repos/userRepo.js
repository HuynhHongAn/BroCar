var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from users';
	return db.load(sql);
}

exports.create = (data) => {
	var sql = "INSERT INTO bookings (user_id, status, type, new_address)" +
				"VALUES (${data.user_id}, ${data.status}, ${data.type}, '')";

	return db.load(sql);
}
