import React, { useState } from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
 const Restourant = () => {
    const[menuData,setmenudata]=useState(Menu)
    console.log(menuData)
    const filteritem=(category)=>{
      const  updatelist=Menu.filter((curlElem)=>{
        return curlElem.category===category;
       })
       setmenudata(updatelist)
      }
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filteritem("lunch")}>lunch</button>
        <button className="btn-group__item" onClick={()=>filteritem("Breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filteritem("Dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setmenudata(Menu)}>All</button>
        
      </div>
    </nav>
    <MenuCard menuData={menuData}/>
    </>
  )
}
export default Restourant;