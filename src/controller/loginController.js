import loginModel from "../model/loginModel.js";
// import view

const loginController = {
    login: (request, response) => {
        const email = request.headers["email"]
        const senha = request.headers["senha"]
        loginModel.login(email, (error, results, fields) => {
            if (results && results.length > 0) {
                if (email === results[0].email && senha === results[0].senha) {
                    console.log("Próxima tela.")
                    response.status(200).end()
                } else {
                    console.log("Email ou senha incorreto - mesma tela.")
                    response.status(404).end()
                }

            } else {
                console.log("Email ou senha não encontrado. - mesma tela");
                response.status(404).end()
            }
            
        })
    },

    listLogin: (request, response) => {
        loginModel.listLogin((error, results, fields) => {
            mensagem(error, results, response)
        })
    },

    listLoginById: (request, response) => {
        const id = request.params.id
        loginModel.listLoginById(id, (error, results, fields) => {
            mensagem(error, results, response)
        })
    }
}

function mensagem(error, results, response) {
    if (!error) {
        if (results.length <= 0) {
            return response.status(404).json({mensagem: "Registro não encontrado."})
        }
        response.status(200).json(results)
    } else {
        response.status(404).json({mensagem: "Ocorreu um erro."})
    }
}

export default loginController