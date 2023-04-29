import pool from "./database/pool.js"

const loginModel = {
    listLogin: (callback) => {
        const sql = "select * from login"
        pool.query(sql, callback)
    },

    listLoginById: (id, callback) => {
        const sql = "select * from login where id_login = ?"
        pool.query(sql, [id], callback)
    }
}

export default loginModel