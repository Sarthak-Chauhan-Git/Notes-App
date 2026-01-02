const { Schema } = require("mongoose");

const NoteSchema = new Schema({
  title: String,
  content: String,
});

module.exports = { NoteSchema };
