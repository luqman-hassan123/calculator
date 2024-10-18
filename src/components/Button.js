import React from 'react';

const Button = ({ title, classes, onButtonClick }) => {
  return (
    <div className="box">
        <button
          className={classes}
          onClick={() => onButtonClick(title)}>
          {title}
        </button>
    </div>
  );
};

export default Button;
