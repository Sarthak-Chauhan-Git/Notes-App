import Notes from "./Notes";

function Notepad() {
  const notes = [
    {
      title: "Title1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores eos, repellat quo reprehenderit, commodi esse temporibus enim nostrum necessitatibus earum voluptatem nobis, aspernatur eius expedita! Consequuntur, qui laboriosam! Reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores eos, repellat quo reprehenderit, commodi esse temporibus enim nostrum necessitatibus earum voluptatem nobis, aspernatur eius expedita! Consequuntur, qui laboriosam! Reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores eos, repellat quo reprehenderit, commodi esse temporibus enim nostrum necessitatibus earum voluptatem nobis, aspernatur eius expedita! Consequuntur, qui laboriosam! Reiciendis?",
    },
    { content: "hi2" },
    { title: "Title2", content: "hi3" },
    { title: "Title4", content: "hi5" },
  ];
  return (
    <>
      <ul className="notes">
        {notes.map((note) => (
          <li>
            <Notes note={note}></Notes>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Notepad;
