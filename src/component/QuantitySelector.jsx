import React from 'react';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={handleDecrease}>
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button className="quantity-btn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
