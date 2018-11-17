var db = require('../fn/mysql-db');
var moment = require('moment');

exports.loadAll = () => {
	var sql = 'select * from bookings';
	return db.load(sql);
}

exports.create = (data) => {
	var sql = "INSERT INTO bookings (user_id, status, type, new_address, created_at)" +
				"VALUES (" + data.user_id + "," + data.status + "," + data.type + ",''," + moment().format() + ")";

	return db.load(sql);
}
