import React from 'react';

const Header = ({ user, onLogout }) => (
  <header className="border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-900 rounded-lg"></div>
        <span className="text-xl font-light text-gray-900">Clean App</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <span 
          id="user-name-display"
          data-testid="user-name-display"
          className="text-gray-600 text-sm"
        >
          Olá, {user?.name}
        </span>
        <button
          id="logout-btn"
          data-testid="logout-button"
          onClick={onLogout}
          className="text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          Sair
        </button>
      </div>
    </div>
  </header>
);

export default Header;