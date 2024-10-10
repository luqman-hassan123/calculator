import React from 'react';
import '../../calculator.css';

const Card = ({ children }) => {
  return (
    <div className="calculator-card">
      {children}
    </div>
  );
};

export default Card;
