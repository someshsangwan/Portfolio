import React from 'react'
import './Navbar.css'
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          Somesh
        </div>
       
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none '}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} activeClass="activeClass" >
            <li>Skills</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true} activeClass="activeClass" >
            <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass" >
            <li>Projects</li>
            </Link>
            <Link spy={true} to='Education' smooth={true} activeClass="activeClass" > 
            <li>Education</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" > 
            Contact
            </Link>
        </button>
      </div>

    </div>
  )
}

export default Navbar