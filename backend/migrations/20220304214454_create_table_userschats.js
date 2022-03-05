
exports.up = function (knex, Promise) {
    return knex.schema.createTable('userschats', table => {
        table.integer('iduser').references('id')
            .inTable('users').notNull()
        table.integer('idchat').references('id')
            .inTable('chats').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('userschats')
};
