import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='homepage'>
        <ul>
        <li>
          <NavLink to="/next">
            <button>Create</button>
          </NavLink>
        </li>
        </ul>
      
    </div>
  )
}

export default Home

