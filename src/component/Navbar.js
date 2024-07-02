import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div class="flex justify-end p-2 bg-yellow-400 w-full h-16">
            <div>
                <NavLink to="/about" >
                <div class="flex items-center justify-center w-40 h-10 p-2 border-black border-2 bg-white hover:bg-gray-200 ">About</div>
                </NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar