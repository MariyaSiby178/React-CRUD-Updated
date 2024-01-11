// FormScreen.js
import React, { useState } from "react";
import AddItem from "../Pages/AddItem";
import EditItem from "../Pages/EditItem";

const FormScreen = ({ onAdd, editedItem, onUpdate, onCancel }) => {
  return (
    <div>
      {editedItem ? (
        <EditItem item={editedItem} onUpdate={onUpdate} onCancel={onCancel} />
      ) : (
        <AddItem onAdd={onAdd} />
      )}
    </div>
  );
};

export default FormScreen;
