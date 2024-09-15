import React from 'react'
import NavBarC from '../container/navbarcontainer/NavBarC'
import { Outlet } from 'react-router-dom'
import RecommendedC from '../container/recommended/RecommendedC'
import CheckOutC from '../container/checkoutC/CheckOutC'


function Layout() {
  return (
    <div>
        <NavBarC>
            <main>
                <Outlet></Outlet>
            </main>
        </NavBarC>
          <RecommendedC></RecommendedC>
          <CheckOutC></CheckOutC>
    </div>

  )
}

export default Layout