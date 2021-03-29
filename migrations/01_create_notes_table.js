exports.up = function (knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments().primary();
    table.string("title");
    table.text("note");
    table.timestamp("created_on").defaultTo(knex.fn.now());
    table.timestamp("updated_on").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.droptable("notes");
};
