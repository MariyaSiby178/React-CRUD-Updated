// ListScreen.js
import React from "react";
import List from "../Pages/List";

const ListScreen = ({ items, onDelete, onEdit }) => {
  return (
    <div>
      <List items={items} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default ListScreen;

