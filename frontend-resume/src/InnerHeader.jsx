import React from 'react'
import { NavLink } from 'react-router-dom'

function InnerHeader() {
    return (
        <div>

            <h2>
                <NavLink to="/">Resume Builder</NavLink>
            </h2>


            <ul>
                <li>
                    <NavLink to="my-detail">My Details</NavLink>
                </li>

                <li>
                    <NavLink to="about">About Me</NavLink>
                </li>

                <li>
                    <NavLink to="skill">Skill and Proficiencies</NavLink>
                </li>

                <li>
                    <NavLink to="expreience">Work Experience</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default InnerHeader
