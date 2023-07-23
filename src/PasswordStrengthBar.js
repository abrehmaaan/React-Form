import React from 'react';
import './PasswordStrengthBar.css';

const PasswordStrengthBar = ({ inputText }) => {
  const isUppercase = /[A-Z]/.test(inputText);
  const isLowercase = /[a-z]/.test(inputText);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputText);
  const hasNumber = /\d/.test(inputText);
  const isLengthValid = inputText.length >= 8;

  const strength =
    (isUppercase ? 1 : 0) +
    (isLowercase ? 1 : 0) +
    (hasSpecialChar ? 1 : 0) +
    (hasNumber ? 1 : 0) +
    (isLengthValid ? 1 : 0);

  const getStrengthColor = () => {
    if (strength < 3) return 'red';
    if (strength >= 3 && strength <= 4) return 'orange';
    return 'green';
  };

  return (
    <div className="password-strength-container">
      <div className="strength-bar-container">
        <div
          className="strength-bar"
          style={{
            width: `${(strength / 5) * 100}%`,
            height: '100%',
            backgroundColor: getStrengthColor(),
          }}
        ></div>
      </div>
      <div className="strength-text" style={{ color: getStrengthColor() }}>
        {strength < 3 ? 'Weak' : strength <= 4 ? 'Moderate' : 'Strong'}
      </div>
    </div>
  );
};

export default PasswordStrengthBar;
