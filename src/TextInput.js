import React, { useState } from 'react';
import PasswordStrengthBar from './PasswordStrengthBar';
import './TextInput.css';

const TextInput = () => {
  const [inputType, setInputType] = useState('text');
  const [inputText, setInputText] = useState('');

  const handleToggleInputType = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  const handleClearText = () => {
    setInputText('');
  };

  return (
    <div className="text-input-container">
      <input
        className="text-input"
        type={inputType}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="buttons-container">
        <button className="button" onClick={handleToggleInputType}>
          {inputType === 'text' ? 'Show' : 'Hide'}
        </button>
        <button className="button" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <PasswordStrengthBar inputText={inputText} />
    </div>
  );
};

export default TextInput;
