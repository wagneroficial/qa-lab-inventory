import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full space-y-8 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
      {children}
    </div>
  </div>
);

export default AuthLayout;