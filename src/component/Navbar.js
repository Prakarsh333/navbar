import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div class="bg-yellow-400 w-full h-16">
            <div>
                <NavLink to="/about" >
                <div>About</div>
                </NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar