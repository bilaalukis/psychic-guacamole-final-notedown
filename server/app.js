const express = require("express");
const path = require("path");
const db = require("./knex.js");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, COntent-Type, Accept"
  );
  next();
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await db.select().table("notes");
    res.json(notes);
  } catch (err) {
    console.log("Error loading notes!", err);
    res.sendStatus(500);
  }
});

app.get("/api/notes/:title", async (req, res) => {
  try {
    const notes = await db("notes").where("title", req.params.title);
    res.json(notes);
  } catch (err) {
    console.log("Error loading notes!", err);
    res.sendStatus(500);
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const notes = await db("notes").insert(req.body);
    console.log("note created!");
    res.status(201).json(notes);
  } catch (err) {
    console.log("Error creating new note!", err);
    res.sendStatus(500);
  }
});

app.patch("/api/notes/:title", async (req, res) => {
  try {
    const notes = await db("notes")
      .where("title", req.params.title)
      .update(req.body);
    console.log("note updated!");
    res.status(204).json(notes);
  } catch (err) {
    console.log("Error updating note!", err);
    res.sendStatus(500);
  }
});

app.delete("/api/notes/:title", async (req, res) => {
  try {
    const notes = await db("notes").where("title", req.params.title).del();
    console.log("note deleted!");
    res.status(204).json(notes);
  } catch (err) {
    console.log("Error updating note!", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
