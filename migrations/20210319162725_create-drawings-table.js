
exports.up = function(knex) {
    return knex.schema.createTable('drawings', (table) => {
        table.increments()
        table.string('projectName')
        table.text('lineCoordinates')
        table.string('image')
   })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('drawings')
};
