import React from 'react'

import MenuContent from './menuContent/menuContent'
import Menubtn from './menuButton/menubtn'

function MenuContainer() {
  return (
    <div className='menu-wrapper'>
          <Menubtn/>
          <MenuContent/>
    </div>
  )
}

export default MenuContainer