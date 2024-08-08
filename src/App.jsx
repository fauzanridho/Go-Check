import { useState } from "react";
import Form from "./components/Form.jsx";
import CheckList from "./components/CheckList.jsx";
import Stats from "./components/Stats.jsx";
import Logo from "./components/Logo.jsx";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(item) {
    setListItems([...listItems, item]);
  }

  function removeItem(id) {
    setListItems(listItems.filter((item) => item.id !== id));
  }

  function toggleDone(id) {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function clearList() {
    const confirmation = window.confirm(
      "Are you sure you want to clear the list?"
    );
    confirmation ? setListItems([]) : {};
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItem} />
      <CheckList
        items={listItems}
        onRemoveItem={removeItem}
        onToggleDone={toggleDone}
        onClearList={clearList}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
