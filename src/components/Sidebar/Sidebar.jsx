import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='side-bar'>
        <div className='logo'>
            <img src={Logo} alt=''/>
            <span>
                Sh<span>p</span>s
            </span>
        </div>
    </div>
  )
}

export default Sidebar