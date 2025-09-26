import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  type = "button",
  disabled = false,
  id,
  'data-testid': dataTestId
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition duration-200";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    link: "text-blue-600 hover:text-blue-500"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      id={id}
      data-testid={dataTestId}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;