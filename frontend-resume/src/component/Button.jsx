import React from 'react'

function StyledButton({lable , onClick}) {
  return (

   <button onClick={onClick}>{lable}</button>
  )
}

export default StyledButton

