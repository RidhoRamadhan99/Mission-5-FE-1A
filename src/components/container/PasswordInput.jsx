import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ label, id, name, value, onChange }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="mb-5 relative">
      <label className="block text-sm font-medium mb-1" htmlFor={id}>
        {label}
      </label>
      <input type={passwordVisible ? 'text' : 'password'} id={id} name={name} value={value} onChange={onChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
      <div className="absolute inset-y-0 top-6 opacity-50 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
