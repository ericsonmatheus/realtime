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

        app.db('userschats')
            .insert(userchat)
            .then(_=> res.send())
            .catch( err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('userschats')
            .select('iduser', 'idchat')
            .then(userchat => res.json(userchat))
            .catch(err => res.status(500).send(err) )
    }

    const getByUser = (req, res) => {
        app.db('userschats')
            .select('iduser', 'idchat')
            .where({iduser: req.params.iduser})
            .then(userchat => res.json(userchat))
            .catch(err => res.status(500).send(err) )
    }
    
    const remove = (req, res) => {
        app.db('userschats')
            .where({iduser: req.params.iduser})
            .del()
            .then(_ => res.send())
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getByUser, remove }
}