import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div class="bg-yellow-400 w-full h-16 flex flex-wrap justify-end items-center">
     <div class="flex">
        <NavLink to="/home"  >
        <div class="w-20 h-auto bg-gray-600 p-2 rounded-sm hover:border-white hover:border-2 text-white m-4">
            Home
        </div>
        </NavLink>
        <NavLink to="/about"  >
        <div class="w-20 h-auto bg-gray-600 p-2 rounded-sm hover:border-white hover:border-2 text-white  m-4">
            About
        </div>
        </NavLink>
        <NavLink to="/contact"  >
        <div class="w-20 h-auto bg-gray-600 p-2 rounded-sm hover:border-white hover:border-2 text-white  m-4">
            Contact
        </div>
        </NavLink>
        
     </div>
    </div>
  )
}

export default Navbar