const { mongoose } = require("mongoose");
const { NoteSchema } = require("../Schema/NoteSchema");

const noteModel = mongoose.model("note", NoteSchema);

module.exports = noteModel;
