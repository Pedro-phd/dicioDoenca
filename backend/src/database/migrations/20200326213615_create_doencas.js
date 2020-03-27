
exports.up = function(knex) {
  return knex.schema.createTable('doencas', function(table){
      table.string('nome').notNullable();
      table.string('historia').notNullable();
      table.string('causas').notNullable();
      table.string('sintomas').notNullable();
      table.string('prevencao').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('doencas');
};
