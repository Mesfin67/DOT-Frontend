import React, { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ErrorMessage from './ErrorMessage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === 'user' && password === 'user') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && !showError && (
        <LoginForm onLogin={handleLogin} />
      )}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
