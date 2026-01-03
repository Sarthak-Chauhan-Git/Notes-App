function Notes({ note }) {
  return (
    <li className="note">
      <h3>{note.title || "Untitled"}</h3>
      <p>{note.content}</p>
    </li>
  );
}

export default Notes;
