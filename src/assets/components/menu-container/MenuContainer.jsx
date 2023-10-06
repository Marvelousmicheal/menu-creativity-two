import React from 'react'
import Menubtn from './menuButton/Menubtn'
import MenuContent from './menuContent/MenuContent'

function MenuContainer() {
  return (
    <div className='menu-wrapper'>
          <Menubtn/>
          <MenuContent/>
    </div>
  )
}

export default MenuContainer