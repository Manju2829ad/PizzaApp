import React from 'react';

function CheckOutP({ cart = [], handleIncrement, handleDecrement, removeFromCart }) {
  return (
    <div className="cart-container" style={{ width: '500px', border: '1px solid black' }}>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="item-card" style={{ marginBottom: '10px' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px' }} />
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>

            {/* Increment/Decrement buttons */}
            <div>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}

export default CheckOutP;
