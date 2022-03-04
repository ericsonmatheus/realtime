const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config]); // Chamando ao iniciar o projeto para melhor avaliação.

module.exports = knex

