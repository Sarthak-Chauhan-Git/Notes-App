import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Notes({ note }) {
  const { fetchNotes } = useContext(AppContext);

  const [saveChange, setSaveChange] = useState(false);
  const handleSaveChange = async (note) => {
    note.title = title;
    note.content = content;
    setSaveChange(true);
    await axios.put(`http://localhost:8080/updateNote`, {
      note: note,
    });
    fetchNotes();
    console.log("Update request send for note", note);
  };

  const [toggleSave, setToggleSave] = useState(true);
  const handleToggleSave = () => {
    setToggleSave(false);
  };

  const [title, setTitle] = useState(note.title);
  const handleTitle = (e) => {
    handleToggleSave();
    setTitle(e.target.value);
  };

  const [content, setContent] = useState(note.content);
  const handleContent = (e) => {
    handleToggleSave();
    setContent(e.target.value);
  };

  const handledlt = async (id) => {
    await axios.delete(`http://localhost:8080/deleteNote/${id}`);
    fetchNotes();
    console.log("Delete request send for note", id);
  };

  return (
    <li className="note">
      <form className="noteHead">
        <input
          className="title"
          onChange={handleTitle}
          placeholder="Untitled"
          type="text"
          value={title || "Untitled"}
        ></input>
        <span>
          {toggleSave || (
            <button className="edit-btn" onClick={() => handleSaveChange(note)}>
              Save
            </button>
          )}
          <button className="dlt-btn" onClick={() => handledlt(note._id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </span>
      </form>
      <textarea
        className="content"
        value={content}
        onChange={handleContent}
      ></textarea>
    </li>
  );
}

export default Notes;
