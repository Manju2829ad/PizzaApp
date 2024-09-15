import React from 'react';
import CheckOutP from '../../presentational/checkout/CheckOutP';

function CheckOutC({ cart,handleIncrement, handleDecrement, removeFromCart }) {
  return (
    <CheckOutP
      cart={cart} // Ensure cart is passed correctly
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      removeFromCart={removeFromCart}
    />
  );
}

export default CheckOutC;
