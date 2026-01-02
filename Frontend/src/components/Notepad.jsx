import Notes from "./Notes";
import { useState, useEffect } from "react";
import axios from "axios";

function Notepad() {
  const [allNotes, setallNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/readNote")
      .then((res) => {
        setallNotes(res.data);
        console.log("notes data fetched from backend");
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ul className="notes">
        {allNotes.map((note) => (
          <li>
            <Notes note={note}></Notes>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Notepad;
