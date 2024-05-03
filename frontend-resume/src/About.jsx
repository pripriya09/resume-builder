import React, { useState } from 'react'
import { useContext } from 'react';
import { DataContext } from './Mainn';

function About() {
  const [message,setMessage] =useState("")
  const {data,setData} =useContext(DataContext)

  function handleShowdata(e){
    e.preventDefault()
    const newdata ={
      message:message,
    }
  setData([...data,newdata])
  setMessage("")
  }
  return (<>
    <div>
    <label>About me</label>
    <textarea name="about" id="" cols="30" rows="10" placeholder='write message here' value={message} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
    </div>
    <button onClick={handleShowdata}>showdata</button>
    </>)
}

export default About





