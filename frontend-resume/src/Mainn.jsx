import React, { useState,createContext  } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import ResumePage from './ResumePage';
import Home from './Home';
import MyDetail from './MyDetail';
import About from "./About";
 import Skill from "./Skill";
 import Experience from "./Experience"
import "./Mainn.css"
import Nesting from './Nesting';
export const DataContext = createContext({})

function Mainn() {

    const [data,setData] =useState([])

//     function handleSubmit(e){
//    preventDefault()
//     }

//  function handleShowdata(e){
//    e.preventDefault()
//  }
 console.log(data)
    return (
        <div>
           
           <DataContext.Provider value={{data,setData}} >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<> <Header/> <Home/> </>} />
                 
                    <Route  path='/next' element={<ResumePage/>}>
                    <Route index element={<Nesting/>}/>
                    <Route path='my-detail' element={<MyDetail/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='skill' element={<Skill/>}/>
                    <Route path='expreience' element={<Experience/>}/>
                    </Route>
        
                </Routes>
            </BrowserRouter>
            </DataContext.Provider>
        </div>
    )
}

export default Mainn
