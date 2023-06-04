import app from "./app.js"

const port = process.env.PORT1 || process.env.PORT2

app.listen(port, () => {
    console.log(`Server connected on port ${port} !`)
})