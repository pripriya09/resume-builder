import React from 'react'
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

function Mainn() {
    return (
        <div>
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
        </div>
    )
}

export default Mainn
