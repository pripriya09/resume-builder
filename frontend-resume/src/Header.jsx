import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
  <div>
  <ul>
        <li>
          <NavLink to="/">
           <h2>Resume Builder</h2>
           
          </NavLink>
        </li>
      </ul>
    </div>  
      
 
  )
}

export default Header
