
exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', table => {
        table.increments('id').primary
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chats')
};
