import React from 'react'
import MenuContainer from '../menu-container/MenuContainer'
import "./header.scss"

function Header() {
  return (
  <>
  <header className="header-wrap">
    <h1 className='logo'>LucaBot</h1>
  
   <MenuContainer/>
  
  </header>
  
  </>
  )
}

export default Header