module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/chats')
        .post(app.api.chat.save)
        .get(app.api.chat.get)

    app.route('/chats/:id')
        .get(app.api.chat.getById)

    app.route('/userschats')
        .post(app.api.usersChats.save)
        .get(app.api.usersChats.get)

    app.route('/messages')
        .post(app.api.message.save)
        .get(app.api.message.get)
    
}