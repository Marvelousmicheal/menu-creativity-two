import React, { useContext } from 'react'
import "./style.scss"
import { MenuContext } from '../menuManager/MenuManager'
import cn from "classnames"
function Menubtn() {
  const {open,setopen}=useContext(MenuContext)
  return (
    <>
    <div className={cn('menu-button-wrap',{open})} >
        <button className='menu-btn' onClick={()=>setopen(!open)}>
<span/>
        </button>
    </div>
    </>
  )
}

export default Menubtn