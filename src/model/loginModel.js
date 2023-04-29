import pool from "./database/pool"

const loginModel = {
    listLogin: (callback) => {
        const sql = "select * from login"
        pool.query(sql, callback)
    }
}

export default loginModel