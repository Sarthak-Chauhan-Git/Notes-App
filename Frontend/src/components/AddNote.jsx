import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function AddNote({ isOpen, onSave }) {
  const { fetchNotes } = useContext(AppContext);
  let [addtitle, setaddtitle] = useState("Untitled");
  function handleaddtitle(e) {
    setaddtitle(e.target.value);
  }

  let [addcontent, setaddcontent] = useState("");
  function handleaddcontent(e) {
    setaddcontent(e.target.value);
  }

  const saveToDb = async () => {
    await axios.post("http://localhost:8080/addNote", {
      title: addtitle,
      content: addcontent,
    });
    onSave();
    fetchNotes();
    console.log("New note creation request send!");
    setaddcontent("");
    setaddtitle("");
  };

  return (
    <>
      <div className={`addNote ${isOpen ? "show" : ""}`}>
        <form action="/addnote">
          <input
            id="addTitle"
            type="text"
            placeholder="Title"
            onChange={handleaddtitle}
            value={addtitle}
          ></input>
          <textarea
            id="addContent"
            placeholder="Content"
            onChange={handleaddcontent}
            value={addcontent}
          ></textarea>
          <button
            id="saveNote"
            placeholder="submit"
            type="button"
            onClick={saveToDb}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
