import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };

    onAddItem(newItem);

    setTitle("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang perlu kamu catat? 🤔</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
