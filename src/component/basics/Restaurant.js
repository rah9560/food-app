import React, {useState} from 'react'
import "./style.css"
import Menu  from './MenuAPI'
import Nav from './Nav'

import Menucard from './Menucard'


const Restaurant = () => {
  const [Menudata,setMenudata]=useState(Menu)
  
  const All="All";

  const filteritem=(category)=>{

    if(category===All){
      setMenudata(Menu);
      return
    }

        const updatedlist=Menu.filter((curElem)=>{
      return curElem.category===category
    })
    setMenudata(updatedlist)
  }
  return (
    <div>
       <Nav filteritem={filteritem} Menudata={Menudata} All={All}/>
       <Menucard Menudata={Menudata}/>
    </div>
  )
}

export default Restaurant