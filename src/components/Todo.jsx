import React, { useState } from "react";

function Todo(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
}
export default Todo;
