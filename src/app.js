import express from "express"
import routesLogin from "./routes/loginRoute.js"
import routesRegister from "./routes/registerRoute.js"

const app = express()

app.use(express.json())
app.use(routesLogin)
app.use(routesRegister)

export default app
