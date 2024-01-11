// App.js
import React, { useReducer, useState } from "react";
import { initialState, ItemReducer } from "./Components/Reducers/ItemReducers";
import FormScreen from "./Components/Screens/FormScreen";
import ListScreen from "./Components/Screens/ListScreen";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  const [editingItem, setEditingItem] = useState(null);
  const [currentScreen, setCurrentScreen] = useState("list"); // Initially show the list screen

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, id: Date.now() } });
    setCurrentScreen("list"); // Switch to the list screen after adding
  };

  const deleteItem = (itemId) => {
    dispatch({ type: "DELETE_ITEM", payload: itemId });
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setCurrentScreen("form"); // Switch to the form screen for editing
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setCurrentScreen("list"); // Switch back to the list screen after canceling edit
  };

  const updateItem = (updatedItem) => {
    dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
    setEditingItem(null);
    setCurrentScreen("list"); // Switch back to the list screen after updating
  };

  return (
    <div>
      <h1 className="text-center my-4">CRUD Operation</h1>
      {currentScreen === "list" ? (
        <ListScreen
          items={state.items}
          onDelete={deleteItem}
          onEdit={startEdit}
        />
      ) : (
        <FormScreen
          onAdd={addItem}
          editedItem={editingItem}
          onUpdate={updateItem}
          onCancel={cancelEdit}
        />
      )}
      <div className="d-flex justify-content-center mt-3">
      <button className="" onClick={() => setCurrentScreen("form")}>Add Item</button>
      </div>
    </div>
  );
};

export default App;
