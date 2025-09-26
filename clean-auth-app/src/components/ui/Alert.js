import React from 'react';

const Alert = ({ message, type = "error" }) => {
  const colors = {
    error: "bg-red-50 border-red-200 text-red-600",
    success: "bg-green-50 border-green-200 text-green-600",
    info: "bg-blue-50 border-blue-200 text-blue-600"
  };

  return (
    <div className={`border px-4 py-3 rounded text-sm ${colors[type]}`}>
      {message}
    </div>
  );
};

export default Alert;