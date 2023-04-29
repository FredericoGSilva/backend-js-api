import express from "express"
import loginController from "../controller/loginController.js"

const router = express.Router()

router.get("/listLogin", loginController.listLogin)

export default router