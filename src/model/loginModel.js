import pool from "./database/pool.js"

const loginModel = {
    listLogin: (callback) => {
        const sql = "select * from login"
        pool.query(sql, callback)
    }
}

export default loginModel