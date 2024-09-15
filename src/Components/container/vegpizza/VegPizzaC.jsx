import React from 'react'
import {pizzaItems} from '../../container/recommended/pizzadata'
import VegPizzaP from '../../presentational/vegpizzap/VegPizzaP'
import CheckOutC from '../checkoutC/CheckOutC'



function VegPizzaC() {
  return (
<>        
 <div>NonVegPizzaC</div>
<VegPizzaP  pizzadata={pizzaItems}></VegPizzaP>
<CheckOutC></CheckOutC>
  </>
  )  
}

export default VegPizzaC;