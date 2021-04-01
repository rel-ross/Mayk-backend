
exports.up = function(knex) {
    return knex.schema.createTable('materials', (table) => {
        table.increments()
        table.string('name')
        table.string('size')
        table.integer('quantity')
        table.boolean('purchased')
   })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('materials')
};
