import React from 'react';
import RecommendedP from '../../presentational/recommended/RecommendedP';
import pizzaItems from '../recommended/pizzadata';

function RecommendedC({ cart, addToCart, handleIncrement, handleDecrement }) {
  return (
    <RecommendedP 
      pizzadata={pizzaItems} 
      addToCart={addToCart} 
      handleIncrement={handleIncrement} 
      handleDecrement={handleDecrement}
    />
  );
}

export default RecommendedC;
