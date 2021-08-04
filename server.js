const express = require ("express")
const productos = require('./api/productos')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var arrayProductos = [productos];

app.get('/api/listar', (req, res) => {
    res.send(arrayProductos)
})

app.post('/api/guardar', (req, res) => {
    arrayProductos.push(req.body)
    res.json(arrayProductos)
})

let PORT = 8080;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

