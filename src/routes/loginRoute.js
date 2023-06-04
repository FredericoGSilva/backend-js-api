import express from "express"
import loginController from "../controller/loginController.js"

const route = express.Router()

route.get("/list", loginController.listLogin)
route.get("/list/:id", loginController.listLoginById)
route.get("/login", loginController.login)

export default route