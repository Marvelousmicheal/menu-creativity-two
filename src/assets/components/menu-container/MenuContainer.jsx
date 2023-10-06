import React from 'react'


import Menubtn from './menuButton/menubtn'
import MenuContent from './menuContent/menuContent'

function MenuContainer() {
  return (
    <div className='menu-wrapper'>
          <Menubtn/>
          <MenuContent/>
    </div>
  )
}

export default MenuContainer