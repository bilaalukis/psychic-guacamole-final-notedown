require("dotenv").config();
const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 9999;

(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();

    console.log("Seeding...");
    await db.seed.run();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening 👂🏽 on port ${PORT}`);
    });
  } catch (err) {
    console.error("Couldn't start app", err);
    process.exit(-1);
  }
})();
