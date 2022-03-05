
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary()
        table.string('body', 3000).notNull()
        table.timestamp('dateHour').defaultTo(knex.fn.now())
        table.integer('iduser').references('id')
            .inTable('users').notNull()
        table.integer('idchat').references('id')
            .inTable('chats').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages')
};
