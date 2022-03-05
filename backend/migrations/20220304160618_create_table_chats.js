
exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', table => {
        table.increments('id').primary
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chats')
};
