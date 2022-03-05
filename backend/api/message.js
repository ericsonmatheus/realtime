module.exports = app => {

    const { existsOrErros } = app.api.validator

    const save = (req, res) => {
        const message = { ...req.body }
        if (req.params.id) message.id = req.params.id

        try {
            existsOrErros(message.body, "Digite alguma mensagem")
            existsOrErros(message.iduser, "Usuário não identificado")
            existsOrErros(message.idchat, "Chat não identificado")
        } catch (msg) {
            res.status(400).send(msg)
        }

        app.db('messages')
            .insert(message)
            .where({ id: message.id })
            .then(_=> res.send())
            .catch( err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('messages')
            .select('id', 'body', 'dateHour', 'iduser', 'idchat')
            .then(message => res.json(message))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}