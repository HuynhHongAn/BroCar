var mysql = require('mysql');

var createConnection = () => {
    return mysql.createConnection({
    	host: '127.0.0.1',
    	port: '8889',
    	user: 'root',
    	password: 'root',
    	database: 'brocar_db'
    });
}

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, rows, fields) => {
            if (err) {
            	reject(err);
            } else {
            	resolve(rows);
            }

            cn.end();
        });
    });
}
