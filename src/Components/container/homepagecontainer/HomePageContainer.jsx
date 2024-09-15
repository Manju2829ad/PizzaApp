import React from "react";
import CartProvider from "../cartprovider/CartProvider"; // Assuming CartProvider is a context provider
import RecommendedC from "../recommended/RecommendedC";
import NonVegPizzaC from "../nonvegpizza/NonVegPizzaC";
import VegPizzaC from "../vegpizza/VegPizzaC";
import CheckOutC from "../checkoutC/CheckOutC";

function HomePageContainer() {
  return (
    <CartProvider>
      <div>
      
        <NonVegPizzaC />
        <VegPizzaC />
        <CheckOutC />
      </div>
    </CartProvider>
  );
}

export default HomePageContainer;
