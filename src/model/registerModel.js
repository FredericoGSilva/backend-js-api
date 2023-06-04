import pool from "./database/pool.js"

const registerModel = {
    register: (email, name, password, tipoUsuario, callback) => {
        const sql = "insert into login(email, senha, nome, tipoUsuario) values (?, ?, ?, ?);"
        pool.query(sql, [email, name, password, tipoUsuario], callback)
    }
}

export default registerModel
