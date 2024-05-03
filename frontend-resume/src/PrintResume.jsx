import { useContext } from 'react';
import { DataContext } from './Mainn';

function PrintResume() {
  const {data} =useContext(DataContext);


  return (<>

    <div>
 <h3>My Detail</h3>
  <div>
    {data.map((dt,index)=>{
   return(
    <ul key={index}>
    <li>Profile: {dt.profile}</li>
    <li>Name: {dt.name}</li>
    <li>Role: {dt.role}</li>
    <li>Experience: {dt.experience}</li>
    </ul>
   )
    })}
  
 
  </div>
 

  <div>
    <h2>About</h2>
    <div>
      {data.map((mes,minde)=>{
        return(
          <p key={minde}>message:{mes.message}</p>
        )
      }) }
    </div>
  </div>

  {/* --------------------------------- */}
  <div>

<div>
  <h3>Work Experience</h3>
  {data.map((exp,inex)=>{
    return(
    <ul key={inex}>
      <li>clientDescription: {exp.clientDescription}</li>
      <li>country: {exp.country}</li>
      <li>duration: {exp.duration}</li>
      <li>technologyStack: {exp.technologyStack}</li>


    </ul>

    )
  })}
</div>

  </div>

  </div>



  
  </> )
}

export default PrintResume
