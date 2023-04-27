import app from "./app.js"

const port = process.env.PORT1 || 3000

app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port} !`)
})