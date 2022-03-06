const SERVER_PORT = 5050

const app = require('express')()
const server = require('http').createServer(app)
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5000"
    }
})

const { json } = require('body-parser')
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

server.listen(SERVER_PORT, () => {
    console.log('Backend executando...')
})

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on('chat.message', (data) => {
        db('messages')
            .insert(data)
            .then(_ => _)
            .catch(err => err)
        io.emit('chat.message', data)
    })
})
