import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            {/* <li>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>
                    About
                </NavLink>
            </li> */}
            <li>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>
                    Signup
                </NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
