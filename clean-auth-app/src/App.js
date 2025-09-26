import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import useAuth from './hooks/useAuth';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const { user, login, register, logout } = useAuth();

  // Auto-navigate para home se usuário estiver logado
  useEffect(() => {
    if (user) {
      setCurrentPage('home');
    } else {
      setCurrentPage('login');
    }
  }, [user]);

  const handleLogin = (email, password) => {
    return login(email, password);
  };

  const handleRegister = (userData) => {
    return register(userData);
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('login');
  };

  // Renderização condicional das páginas
  if (user && currentPage === 'home') {
    return <HomePage user={user} onLogout={handleLogout} />;
  } else if (currentPage === 'register') {
    return (
      <RegisterPage
        onRegister={handleRegister}
        onNavigateToLogin={() => setCurrentPage('login')}
      />
    );
  } else {
    return (
      <LoginPage
        onLogin={handleLogin}
        onNavigateToRegister={() => setCurrentPage('register')}
      />
    );
  }
};

export default App;