import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      password: '123456'
    }
  ]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const savedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    if (savedUsers.length === 0) {
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      setUsers(savedUsers);
    }
    
    setUser(savedUser);
  }, []);

  const saveToStorage = (userData, allUsers) => {
    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('users', JSON.stringify(allUsers));
  };

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      saveToStorage(foundUser, users);
      return true;
    }
    return false;
  };

  const register = (userData) => {
    const userExists = users.find(u => u.email === userData.email);
    if (userExists) {
      return false;
    }
    const newUser = { ...userData, id: Date.now() };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
    saveToStorage(newUser, updatedUsers);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return { user, login, register, logout };
};

export default useAuth;