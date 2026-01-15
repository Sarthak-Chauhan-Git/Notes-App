import { useState, useEffect } from "react";
import AddNote from "./AddNote";

function Sidebar() {
  let [addnotebtn, setaddnotebtn] = useState(false);
  function handleaddnotebtn(e) {
    setaddnotebtn((prev) => !prev);
  }

  return (
    <div id="sidebar">
      <h1>Store memories for life</h1>
      <hr />

      <button id="addnotebtn" onClick={handleaddnotebtn}>
        {addnotebtn ? "Cancel" : "New Note"}
      </button>
      <AddNote isOpen={addnotebtn} onSave={handleaddnotebtn}></AddNote>
    </div>
  );
}

export default Sidebar;
