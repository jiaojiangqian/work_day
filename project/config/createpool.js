var { mysqlObject } = require('./config');

var mysql = require('mysql');

var connection = mysql.createPool(mysqlObject);

function query(sql, values) {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            connect.query(sql, values, (qerr, rows, fields) => {
                if (qerr) {
                    console.log(qerr);
                    reject(qerr);
                    return;
                }
                resolve(rows);
                connect.release();
            })
        })
    })
}

module.exports = { query };