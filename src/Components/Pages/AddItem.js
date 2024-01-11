// AddItem.js
import React, { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [itemName, setItemName] = useState("");

  const handleAdd = () => {
    if (itemName.trim() !== "") {
      onAdd({ name: itemName });
      setItemName("");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;