import React from 'react';

const Buttons = ({ items, className, onButtonClick }) => {
  return (
    <div className="box">
      {items.map((item) => (
        <button
          key={item}
          className={className}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
