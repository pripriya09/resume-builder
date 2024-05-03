import React, { useState} from 'react'
import { useContext } from 'react';
import { DataContext } from './Mainn';
import axios from "axios"
import StyledButton from './component/Button';
function MyDetail() {
  const [profile,setProfile] =useState("");
  const [name,setName ] =useState("");
  const [role,setRole] =useState("");
  const [experience,setExperience]=useState("");

  const {data,setData} =useContext(DataContext)
  // const[data,setData] =useState([])


  function handleClick(event){
    event.preventDefault()
    console.log(data)
    axios.post("http://localhost:8080/submit",
    {
      profile:profile,
      name:name,
      role:role,
      experience:experience,
    },
    {
      headers: {
        "Content-Type": "application/json"
      },

    }
  )
    .then((reponse) => {
      console.log(reponse)
    })
    .catch((error) => {
      console.log(error)
    })

   
    const Newdata ={
      profile:profile,
      name:name,
      role:role,
      experience:experience,
    }
   setData([...data,Newdata])
   console.log(Newdata)
   setProfile("")
   setName("")
   setRole("")
   setExperience("")
  }
  

  return (
    <div>
      <div className='form'>
        <label htmlFor="">Profile Picture</label>
        <input type="text" id='profile' name='profile' value={profile} onChange={(e)=>setProfile(e.target.value)} />
      </div>
      <div className='form'>
        <label htmlFor="">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className='form'>
        <label htmlFor="role">Role</label>

        <input type="text" id="role" name="role" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)} />
      </div>
      <div className='form'>
        <label htmlFor="totalExp">Total Experience</label>
        <input type="text" id="totalExp" name="totalExp" value={experience} onChange={(e)=>setExperience(e.target.value)}/>
        <small>Years</small>  
      </div>
    
    
      <StyledButton lable={"showData"} onClick={handleClick}/>
  
    </div>
    

  )
}

export default MyDetail
