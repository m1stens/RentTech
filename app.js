const mysql = require('mysql2')
// const config = require('./config')

// function t01() {
// 	const conn = mysql.createConnection(config)

// 	conn.connect()
// 	let query = 'SELECT * FROM `TPhone`'

// 	conn.query(query, function(er, result) {
// 		console.log(er)
// 		console.log(result)
// 	})
// 	conn.end()
// }
// t01()

const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "rentech_base",
	database: "rentech_base",
	password: "base_1",
	port: "3006"
})

conn.connect(err => {
	if(err) {
		console.log(err)
	} else {
		console.log('Database ------ OK')
	}
})

let query = 'SELECT * FROM TPhone'
conn.query(query, function(error, result) {
	console.log(result)
	
	conn.end()
})