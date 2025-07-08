import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sathi1234",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
        console.error(err)
    } else {
        console.log("Connected")
    }
})

export default con;

