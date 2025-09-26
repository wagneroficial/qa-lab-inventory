import React from 'react';

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  onKeyPress,
  required = false,
  id,
  'data-testid': dataTestId
}) => (
  <input
    id={id}
    data-testid={dataTestId}
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    required={required}
  />
);

export default Input;