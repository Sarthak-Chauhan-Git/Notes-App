function Notes({ note }) {
  return (
    <div className="note">
      <h3>{note.title || "Untitled"}</h3>
      <p>{note.content}</p>
    </div>
  );
}

export default Notes;
