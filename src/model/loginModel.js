import pool from "./database/pool.js"

const loginModel = {
    login: (email, callback) => {
        const sql = "select * from login where email = ?"
        pool.query(sql, [email], callback)
    },

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