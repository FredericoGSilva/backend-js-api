import mysql from "mysql2"

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 2
})