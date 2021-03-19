
exports.up = function(knex) {
    return knex.schema.createTable('drawings', (table) => {
        table.increments()
        table.string('line-coordinates')
        table.integer('image')
   })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('drawings')
};
