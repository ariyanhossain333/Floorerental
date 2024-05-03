import React, {useState} from 'react'

const Header = () => {
  const [menuopen, setMenuopen] = useState(false)

  const getMenuStyles = (menuopen) => {
    if (document.documentElement.clientWidth <= 768) {
      return { top: !menuopen && "-50%" }
    }
  }
  return (
    
    <nav className='header-container'>
       <div className="logo">Binhoff<span>.co</span></div>  
      <ul style={getMenuStyles(menuopen)} className='Header-list'>
        <li>Investment potential</li>
        <li>Location</li>
        <li>About company</li>
        <li>Contact</li>
       </ul> 
       <button className='signin'> Sign in</button>

       <div onClick={()=>setMenuopen((prev)=> !prev)} className='menubar'><i class="fa-solid fa-bars"></i></div>
     
    </nav>
    
  )
}

export default Header
