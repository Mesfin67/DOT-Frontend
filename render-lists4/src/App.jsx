import { useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { ItemList } from './ItemList';

// Main App Component: Manages state and renders other components
export default function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Add and Delete items</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
}
