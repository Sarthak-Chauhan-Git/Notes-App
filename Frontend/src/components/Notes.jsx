import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Notes({ note }) {
  const { fetchNotes } = useContext(AppContext);
  const handledlt = async (id) => {
    await axios.delete(`http://localhost:8080/deleteNote/${id}`);
    fetchNotes();
    console.log("Delete request send for note", id);
  };
  return (
    <li className="note">
      <span className="noteHead">
        <h3>{note.title || "Untitled"}</h3>
        <span>
          <button className="edit-btn">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button className="dlt-btn" onClick={() => handledlt(note._id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </span>
      </span>
      <p>{note.content}</p>
    </li>
  );
}

export default Notes;
