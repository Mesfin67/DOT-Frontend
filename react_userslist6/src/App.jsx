import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Abebe', age: 25 },
    { id: 2, name: 'Kebede', age: 30 },
    { id: 3, name: 'Adane', age: 35 },
  ]);

  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    const newAge = prompt('Enter new age:');
    
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, name: newName || user.name, age: newAge || user.age }
        : user
    ));
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <button onClick={() => handleEdit(user.id)} className="edit-button">Edit</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
