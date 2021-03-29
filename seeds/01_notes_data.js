exports.seed = function (knex) {
  return knex("notes")
    .del()
    .then(function () {
      return knex("notes").insert([
        {
          title: "note 1",
          note: "this is note 1",
        },
        {
          title: "note 2",
          note: "this is note 2",
        },
        {
          title: "note 3",
          note: "this is note 3",
        },
        {
          title: "note 4",
          note: "this is note 4",
        },
      ]);
    });
};
