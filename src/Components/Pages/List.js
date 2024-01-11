// List.js
import React from "react";

const List = ({ items, onDelete, onEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} -{" "}
          <button onClick={() => onDelete(item.id)}>Delete</button>{" "}
          <button onClick={() => onEdit(item)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default List;




