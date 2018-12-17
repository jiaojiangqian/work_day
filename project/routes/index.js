var express = require('express');
var router = express.Router();

var { query } = require('../config/createpool');

var { sql } = require('../config/sql');

// /api/get/train_tickets?date=2018-12-12 
/* GET home page. */
router.get('/api/get/train_tickets', function(req, res, next) {
    var { date } = req.query;
    // var sql = `select * from list_date where date=?`;
    query(sql.SELECT_LIST_DATE, [date]).then((rows) => {
        console.log(rows);
        res.json({ code: 1, data: rows })
    }).catch((err0 => {
        res.json({ code: 0, msg: err })
    }))
});

module.exports = router;