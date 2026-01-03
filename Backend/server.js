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
app.put("/updateNote", (req, res) => {
  console.log("Update request recieved");
  res.send("Updated!");
});

// dalete data
app.delete("/deleteNote", (req, res) => {
  console.log("Delete request recieved");
  res.send("Deleted!");
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
