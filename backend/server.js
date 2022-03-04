// const Koa = require("koa");
// const socket = require("socket.io");
// const http = require("http");
// const { users, chats, messages } = require("./database/msg");

// const app = new Koa();
// const server = http.createServer(app.callback());

// const io = socket(server, {
//     cors: {
//         origin: "http://localhost:5000"
//     }
// });

// const SERVER_PORT = 5050
// const SERVER_HOST = "localhost"


// server.listen(SERVER_PORT, SERVER_HOST, () => {
//     console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`)
// })

// io.on("connection", (socket) => {
//     console.log("conectado");

//     socket.on("chat.message", (data) => {
//         messages.create({ 
//             id_user: data.id_user, 
//             id_chat: data.id_chat,
//             message: data.message,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         })

//         io.emit("chat.message", data)

//     })

//     socket.on("chat.message", (data) => {
//         const teste = messages.findAll({ 
//             where: { id_chat: data.id_chat}
//         }).then((result) => {
//                 socket.emit("chat.message", json(result))
//             })
//     })
// })


