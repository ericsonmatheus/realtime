const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrErros, notExistsOrError, equalsOrError } = app.api.validator

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        
        if(req.params.id) user.id = req.params.id

        try {
            existsOrErros(user.name, 'Nome não informado')
            existsOrErros(user.login, 'Login não informado')
            existsOrErros(user.password, 'Senha não informada')
            existsOrErros(user.confirmPassword, 'Confirmação de inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            const userFromDB = await app.db('users')
                .where({ login: user.login}).first() 
            if(!user.id) {
                notExistsOrError(userFromDB, 'Login já cadastrado')
            }

        } catch(msg) {
            return res.status(400).send(msg)
        }        

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({id: user.id})
                .then( _ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .returning('*')
                .then( user => res.status(204).send(user))
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id','name', 'login')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'login')
            .where({ id: req.params.id})
            .first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}
