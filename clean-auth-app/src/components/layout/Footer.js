import React from 'react';

const Footer = () => (
  <footer className="border-t border-gray-100 mt-24">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">© 2025 Clean App. Feito com ♡</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacidade</a>
          <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Termos</a>
          <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Suporte</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;