var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from bookings';
	return db.load(sql);
}
