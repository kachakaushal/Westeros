import React from 'react'
import "./Navbar.css"
import logo from "../../assets/pngwing.com.png"
import profilelogo from '../../assets/w-logo-blue.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Westeros</h1>
            <img src={logo} alt="" className='navprofile' />
        </div>
    )
}

export default Navbar