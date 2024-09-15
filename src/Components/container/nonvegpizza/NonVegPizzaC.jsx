import React from 'react'
import {pizzaItems} from '../../container/recommended/pizzadata'
import NonVegPizzaP from '../../presentational/nonvegpizzap/NonVegPizzaP'
import NavBarC from '../navbarcontainer/NavBarC'
import CheckOutC from '../checkoutC/CheckOutC'


function NonVegPizzaC() {
  return (
<>         <div>NonVegPizzaC</div>
<NavBarC></NavBarC>
<CheckOutC></CheckOutC>
    <NonVegPizzaP  pizzadata={pizzaItems}></NonVegPizzaP>
  </>
  )  
}

export default NonVegPizzaC