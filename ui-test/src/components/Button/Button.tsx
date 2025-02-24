import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>click{children}</button>;
};

export default Button;
