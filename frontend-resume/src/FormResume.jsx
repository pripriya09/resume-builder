import React from 'react'
import { Outlet } from 'react-router-dom'

function FormResume() {
  return (
    <div>
      <form method='post' >
        

        <button>Next</button>


        <Outlet />
      </form>
    </div>
  )
}

export default FormResume
