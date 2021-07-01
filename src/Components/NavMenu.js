// import React from "react"
// import {NavLink} from "react-router-dom"
// import styled from "styled-components";
// import GlobalStyles from "../styles/GlobalStyle";


// const NavMenuStyles=styled.nav`
// postion:fixed;
// z-index:100;
// top:0;
// width:100%;
// padding:1rem 0;
// ul{
//     max-width:1200px;
//     margin:0 auto;
//     text-align:center;
//     li{
//         diplay:inline-block;
//         border-raduis:8px;
//         transition:0.3s ease background-color;;
//         &:hover{
//             background-color:var(--deep-black)
//         }
//     }
//     a{
//         display:inline-block;
//         font-family:"RobotoMono Reguler";
//         padding:1rem 2rem;
//         font-size:2rem;
//         color:var(--grey-1);
//         outline:none
//     }
//     .active{
//         color:var(--white)
//     }
// }
// `;



// function NavMenu(){
//     return(
//         <div>
//             <ul>
//                 <li><NavLink to="/">Home</NavLink>
//                 </li>
//                 <li><NavLink to="/about">About</NavLink>
//                 </li>
//                 <li><NavLink to="/projects">Projects</NavLink>
//                 </li>
//                 <li><NavLink to="/contact">Contact</NavLink>
//                 </li>
//             </ul>
//         </div>
//     )

// }
// export default NavMenu


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .mobile-close-icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
        transform: translateY(calc(-100% - var(--top)));                  // which moves bar upwards
        // display: none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .mobile-close-icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}                 //when we click on menu icon it shows bar
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
           className="mobile-close-icon"                   
           onClick={() => setShowNav(!showNav)}              //when we click on X mark it closes bar
           role="button"
           onKeyDown={() => setShowNav(!showNav)}
           tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}            //when we click on X mark it closes bar
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}             //when we click on X mark it closes bar
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}              //when we click on X mark it closes bar
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}              //when we click on X mark it closes bar
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}