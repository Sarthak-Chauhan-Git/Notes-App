import Notes from "./Notes";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

function Notepad() {
  const { allNotes, fetchNotes } = useContext(AppContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <ul className="notes">
        {allNotes.map((note) => (
          <Notes note={note} key={note._id}></Notes>
        ))}
      </ul>
    </>
  );
}

export default Notepad;
