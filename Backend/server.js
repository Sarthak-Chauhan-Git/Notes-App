require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const NoteModel = require("./Model/noteModel");

const data = require("./data/data");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// root
app.get("/", (req, res) => {
  console.log("Request recieved");
  res.send("Hello!");
});

// reinitialize temp data
app.get("/data", async (req, res) => {
  try {
    await NoteModel.deleteMany({});
    await NoteModel.insertMany(data);
    console.log("Data reinitialized!");
    return res.status(200).send("Data reintialized!");
  } catch (err) {
    console.error("Reinitialization error :", err);
    return res.status(500).send("Failed to reintialize data!");
  }
});

// read data
app.get("/readNote", async (req, res) => {
  try {
    let allNotes = await NoteModel.find({});
    console.log("All notes viewed");
    res.json(allNotes);
  } catch (err) {
    console.error("View error :", err);
    return res.status(500).send("Failed to view data!");
  }
});

// add data
app.post("/addNote", (req, res) => {
  console.log("Add request recieved");
  try {
    let newNote = new NoteModel({
      title: req.body.title,
      content: req.body.content,
    });
    newNote.save();
    console.log("Note added");
    res.status(200).send("Note saved!");
  } catch (err) {
    console.error("Add note error: ", err);
    return res.status(500).send("Failed to add data to database!");
  }
});

// update data
app.put("/updateNote", async (req, res) => {
  console.log("Update request recieved");
  try {
    let note = req.body.note;
    let updatedNote = await NoteModel.findByIdAndUpdate(
      note._id,
      { $set: { title: note.title, content: note.content } },
      { new: true }
    );
    console.log(note._id, " -> ", updatedNote);
    console.log("Note updated");
    res.status(200).send("Note updated!");
  } catch (err) {
    console.error("Update note error: ", err);
    return res.status(500).send("Failed to update data to database!");
  }
});

// delete data
app.delete("/deleteNote/:id", async (req, res) => {
  console.log("Delete request recieved");
  let id = req.params.id;
  try {
    let thisnote = await NoteModel.findByIdAndDelete(id);
    console.log(id, " -> ", thisnote);
    console.log("Note added");
    res.status(200).send("Note deleted!");
  } catch (err) {
    console.error("Delete note error: ", err);
    return res.status(500).send("Failed to delete data to database!");
  }
});

// server connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected successfully");
    app.listen(PORT, () => {
      console.log(`Backend running on port: ${PORT}`);
      console.log(`Access at: http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Database connection failed:", e.message);
    process.exit(1);
  });
