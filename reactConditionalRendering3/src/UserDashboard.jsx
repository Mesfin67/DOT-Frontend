import React from 'react';

function UserDashboard({ onLogout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
