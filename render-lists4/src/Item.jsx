// Item Component: Renders an individual item with a delete button
export function Item({ item, onDelete }) {
    return (
      <div className="item">
        <span>{item}</span>
        <button onClick={onDelete} className="delete-button">Delete</button>
      </div>
    );
  }
  