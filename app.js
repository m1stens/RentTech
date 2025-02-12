const mysql = require('mysql')
const conn = mysql.createConnection({
	host: "localhost",
	user: "m1stens4_base",
	database: "m1stens4_base",
	password: "Base_4"
})

conn.connect(err => {
	if(err) {
		console.log(err)
	} else {
		console.log('Database ------ OK')
	}
})