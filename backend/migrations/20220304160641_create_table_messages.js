
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary()
        table.string('body', 3000).notNull()
        table.date('dateHour').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('userChat').references('id')
            .inTable('chats').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages')
};
