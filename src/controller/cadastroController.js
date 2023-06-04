import registerModel from "../model/registerModel.js";

const registerController = {
    register: (request, response) => {
        const {email, password, name, tipoUsuario} = request.body
        registerModel.register(email, password, name, tipoUsuario, (error, results, fields) => {
            if (!error) {
                response.status(201).json({message: 'Cadastro bem sucedido.'})
                console.log(results)
            } else {
                response.status(400).json({message: 'Erro no cadastro.'})
                console.log(results)
            }
        })
    }

}

export default registerController