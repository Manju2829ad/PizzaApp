import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomizePizzaContainer from './Components/container/customizepizzacontainer/CustomizePizzaContainer';
import OrderHistoryContainer from './Components/container/orderhistory/OrderHistoryContainer';
import OrderSummaryContainer from './Components/container/ordersummary/OrderSummaryContainer';
import  {getNavObject}   from './Components/container/navbarcontainer/NavBarC';
import Layout from './Components/layout/Layout';

function App() {
  // Get the array of route objects from NavBarC
 const navItems = getNavObject();

  return (
    <Router>  
      <div className="App">
        <h1>Pizza Order App</h1>

        <Routes>
          <Route path="/" element={<Layout />} />
          {navItems.map((item) => (
            <Route key= {item.id} path={item.path} element={item.element} 
            > </Route> 
          ))}
          <Route path="/customize" element={<CustomizePizzaContainer />} />
          <Route path="/order-summary" element={<OrderSummaryContainer />} />
          <Route path="/order-history" element={<OrderHistoryContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

// Assuming getObjects is a static method or a function within NavBarC
// function getObjects() {
//   return NavBarC.getObjects();
// }

export default App;
