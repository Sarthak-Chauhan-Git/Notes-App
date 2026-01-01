require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  console.log("Request recieved");
  res.send("Hello!");
});

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
