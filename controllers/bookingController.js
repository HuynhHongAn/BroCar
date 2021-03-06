var express = require('express');
var bookingRepo = require('../repos/bookingRepo.js');

var router = express.Router();

router.get('/', (req, res) => {
	bookingRepo.loadAll()
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

router.post('/create', (req, res) =>{
	bookingRepo.create(req.body)
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

module.exports = router;
