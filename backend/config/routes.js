module.exports = app => {

    app.post('/singup', app.api.user.save)
    app.post('/singin', app.api.auth.singin)
    app.post('/validadeToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/chats')
        .all(app.config.passport.authenticate())
        .post(app.api.chat.save)
        .get(app.api.chat.get)

    app.route('/chats/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.chat.getById)

    app.route('/userschats')
        .all(app.config.passport.authenticate())
        .post(app.api.usersChats.save)
        .get(app.api.usersChats.get)

    app.route('/messages')
        .all(app.config.passport.authenticate())
        .post(app.api.message.save)
        .get(app.api.message.get)
    
}