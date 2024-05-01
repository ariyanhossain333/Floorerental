import React from 'react'

const Header = () => {
  return (
    
    <nav className='header-container'>
       <div className="logo">Binhoff<span>.co</span></div>  
      <ul className='Header-list'>
        <li>Investment potential</li>
        <li>Location</li>
        <li>About company</li>
        <li>Contact</li>
       </ul> 
       <button className='signin'> Sign in</button>
     
    </nav>
    
  )
}

export default Header
