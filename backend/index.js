const app = require('express')()
const http = require('http').createServer(app)
const io  = require("socket.io")(http)
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(5050, () => {
    console.log('Backend executando...')
})