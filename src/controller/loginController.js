import loginModel from "../model/loginModel.js";
// import view

const loginController = {
    listLogin: (req, res) => {
        loginModel.listLogin((error, results, fields) => {
            if (!error) {
                res.status(200).json(results)
            } else {
                res.status(404).json({mensagem: "Erro"})
            }
        })
    },

    listLoginById: (req, res) => {
        loginModel.listLoginById((error, results) => {
            if (!error) {
                res.status(200).json(results)
            } else {
                res.status(404).json({mensagem: "Erro"})
            }
        })
    }
}

export default loginController