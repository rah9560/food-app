import React from 'react'

const Nav = ({filteritem}) => {
  return (
    <>
        <nav className='navbar'>
        <button className='btn1' onClick={()=>filteritem("Breakfast")}>Breakfast</button>
        <button className='btn1' onClick={()=>filteritem("evening")}>Evening</button>
        <button className='btn1' onClick={()=>filteritem("Dinner")}>Dinner</button>
        <button className='btn1' onClick={()=>filteritem("All")}>All</button>
      </nav>
    </>
  )
}

export default Nav