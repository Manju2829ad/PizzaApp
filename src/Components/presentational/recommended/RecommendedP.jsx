import React from 'react';
import './RecommendedP.css';

function RecommendedP({ pizzadata = [], addToCart, handleIncrement, handleDecrement }) {
  return (
    <div className="container">
      {pizzadata
        .filter((data) => data.category === 'recommended')
        .map((data) => (
          <div key={data.id} className="card">
            <div className="image">
              <img src={data.image} alt={data.name} />
            </div>
            <h2 className="cardname">{data.name}</h2>
            <p className="des">{data.description}</p>

            {data.inCart ? (
              <div className="buttons">
                <button
                  className="increase"
                  onClick={() => handleIncrement(data.id)}
                >
                  <span className="plus">+</span>
                </button>
                <span className="quantity">{data.quantity}</span>
                <button
                  className="decrease"
                  onClick={() => handleDecrement(data.id)}
                >
                  <span className="minus">-</span>
                </button>
              </div>
            ) : (
              <div className="addtocart">
                <button onClick={() => addToCart(data)}>
                  <span className="text">Add to cart</span>
                </button>
              </div>
            )}

            <select className="size" id="size" name="size">
              {data.sizes.map((size, index) => (
                <option value={size} key={index}>
                  {size}
                </option>
              ))}
            </select>
            <select className="crust-size" id="crust" name="crust">
              {data.crust.map((crust, index) => (
                <option value={crust} key={index}>
                  {crust}
                </option>
              ))}
            </select>
          </div>
        ))}
    </div>
  );
}

export default RecommendedP;
