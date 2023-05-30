import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <NavLink to='/'>HOME</NavLink>
                        <NavLink to='/planner'>TRAVEL PALNNER</NavLink>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
