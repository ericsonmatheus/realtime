module.exports = app => {

    const { existsOrErros } = app.api.validator

    const save = (req, res) => {
        const message = { ...req.body }

        try {
            existsOrErros(message.body, "Digite alguma mensagem")
            existsOrErros(message.iduser, "Usuário não identificado")
            existsOrErros(message.idchat, "Chat não identificado")
        } catch (msg) {
            res.status(400).send(msg)
        }

        app.db('messages')
            .insert(message)
            .then(_=> res.send())
            .catch( err => res.status(500).send(err))
    }

    const getByChat = (req, res) => {
        app.db('messages')
            .select('id', 'body', 'name', 'dateHour', 'iduser', 'idchat')
            .where({ idchat: req.params.idchat})
            .then(message => res.json(message))
            .catch(err => res.status(500).send(err))
    }

    return { save, getByChat }
}