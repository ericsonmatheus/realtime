module.exports = app => {

    const { existsOrErros } = app.api.validator

    const save = (req, res) => {
        const userchat = { ...req.body }

        try {
            existsOrErros(userchat.iduser, "Usuário não identificado")
            existsOrErros(userchat.idchat, "Chat não identificado")
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('userschats')
            .select('iduser', 'idchat')
            .then(userchat => res.json(userchat))
            .catch(err => res.status(500).send(err) )
    }

    return { save, get }
}