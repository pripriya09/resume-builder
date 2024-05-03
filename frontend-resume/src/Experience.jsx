
import React, { useState} from 'react'
import { useContext } from 'react';
import { DataContext } from './Mainn';

const Experience = () => {
  const [clientDescription, setClientDescription] = useState('');
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState('');
  const [technologyStack, setTechnologyStack] = useState('');
  const {data,setData} =useContext(DataContext)

  function handleChange(e){
e.preventDefault()
const experiencedata={
  clientDescription:clientDescription,
  country:country,
  duration:duration,
  technologyStack:technologyStack,
}
setData([...data,experiencedata])
setClientDescription("");
setCountry("");
setDuration("");
setTechnologyStack("");
  }



  return (
    <div>
      <h2>Experience</h2>
      <div>
        <label htmlFor="clientDescription">Client Description</label>
        <input
          type="text"
          id="clientDescription"
          value={clientDescription}
          onChange={(e)=> setClientDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e)=>setDuration(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="technologyStack">Technology Stack</label>
        <select
          id="technologyStack"
          value={technologyStack}
          onChange={(e)=> setTechnologyStack(e.target.value)}
        >
          <option value="">Select</option>
          <option value="React">React</option>
          <option value="mongosh">Angular</option>
          <option value="JavaScript">Vue</option>
          <option value="Node.js">Node.js</option>
        
        </select>
      </div>

      <button onClick={handleChange}>NEXT</button>
    </div>
  );
};

export default Experience;

