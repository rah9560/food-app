import React from 'react'

const Menucard = ({Menudata}) => {
  return (
    <div>
        <section className='main-conatiner'>
        {Menudata.map((curElem)=>{
            return(
                <div className='container' key={curElem.id}>
        <div className='sno-main-container'>
        <div className='sno-container'>
        <p className='sno'>{curElem.id}</p>
        </div>
       </div>
            <p className='type'>{curElem.category}</p>
            <h3 className='name'>{curElem.name}</h3>
            <p className='text'>Magie is very tasty and beautiful</p>
            <p className='price'>{curElem.price}</p>
            <hr className='line'></hr>
            <p className='read'>READ</p>
            <div className='btn-container'>
            <button className='btn'>Order Now</button>
            </div>
        </div>
            )
        })}

        </section>
        
    </div>
  )
}

export default Menucard