import express from "express"
import registerController from "../controller/cadastroController.js"

const route = express.Router()

route.post("/cadastro", registerController.register)

export default route