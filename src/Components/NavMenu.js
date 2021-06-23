import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";


const NavMenuStyles=styled.div `
postion:fixed;
z-index:100;
top:0;
width:100%;
padding:1rem 0;
ul{
    max-width:1200px;
    margin:0 auto;
    text-align:center;
    li{
        diplay:inline-block;
        border-raduis:8px;
        transition:.3s ease background-color;
    }
}
`;



function NavMenu(){
    return(
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink>
                </li>
                <li><NavLink to="/about">About</NavLink>
                </li>
                <li><NavLink to="/projects">Projects</NavLink>
                </li>
                <li><NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    )

}
export default NavMenu