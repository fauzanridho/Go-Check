import { useState } from "react";
import Item from "./Item.jsx";

function CheckList({ items, onRemoveItem, onToggleDone, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return items.slice().sort((a, b) => a.done - b.done);
      case "input":
      default:
        return items;
    }
  }
  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">urutkan berdasarkan status</option>
        </select>
        <button onClick={onClearList}>Hapus semua</button>
      </div>
    </div>
  );
}
export default CheckList;
