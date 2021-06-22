import React from "react"
import {NavLink} from "react-router-dom"


function NavMenu(){
    return(
        <div>
            <ul>
                <li><NavLink to="">Home</NavLink>
                </li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li> 
            </ul>
        </div>
    )

}
export default NavMenu