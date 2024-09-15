import React from 'react'
import { Link } from 'react-router-dom';
const NavBarP=({navItems=[]})=>{
    return (
        <>
        <div id="navbar"  className="flex  " style={{display:"flex",border:"1px solid black",justifyContent:'space-evenly',position:"relative",bottom:"00px"}}>
{navItems.map((menu)=>(

<Link key={menu.id} to={menu.path}  style={{textDecoration:'none'}} >
<div style={{marginRight:"10px", position:"relative",bottom:"20px"}}><h3>{menu.name}</h3></div>
</Link>
))}
        </div>
        </>
    )
}

export default NavBarP;