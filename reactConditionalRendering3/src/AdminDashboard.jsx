import React from 'react';

function AdminDashboard({ onLogout }) {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
