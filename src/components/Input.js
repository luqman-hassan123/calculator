import React from 'react';

const Input = ({ value, inputtype, handleClick, className }) => {
  return (
    <input type={inputtype} className={className} value={value} onChange={(e) =>handleClick(e.target.value)} >
      
    </input>
  );
};

export default Input;
