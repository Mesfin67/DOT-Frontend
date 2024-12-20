import { Item } from './Item';

// ItemList Component: Renders a list of items
export function ItemList({ items, onDeleteItem }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={() => onDeleteItem(index)} />
      ))}
    </div>
  );
}
