module.exports = app => {

    const save = (req, res) => {
        const chat = { ...req.body}
        app.db('chats')
            .insert(chat)
            .then(_ => res.status(204).send())
            .catch(err => res.statu(400).send(err))
    }

    const get = (req, res) => {
        app.db('chats')
            .select('id', 'created_at')
            .then(chat => res.json(chat))
            .catch(err => res.status(400).send(err))
    }

    return { save, get }
}