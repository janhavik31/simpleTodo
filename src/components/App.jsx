import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function delItem(id) {
    setItems((prev) => {
      return [
        ...prev.filter((todoItem, index) => {
          return index != id;
        }),
      ];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <Todo
                key={index}
                id={index}
                todoItem={todoItem}
                onChecked={delItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
