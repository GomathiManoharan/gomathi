import React from 'react'
import {Link} from "react-scroll"
import './Header1.css'


const Header1 = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <h1>
        Develop
        <span>er</span>
        </h1>
      </div>
      <div className='header_right'>
      <Link to="about" smooth={true} duration={500}>
      <h4>About </h4>
      </Link>
      <Link to="skills" smooth={true} duration={500}>
      <h4>Skills</h4>
      </Link>
      <Link to="project" smooth={true} duration={500}>
      <h4>Project</h4>
      </Link>
      <Link to="experience" smooth={true} duration={500}>
      <h4>Experience</h4>
      </Link>
      <Link to="contact" smooth={true} duration={500}>
      <h4 >Contact</h4>
      </Link>
      <h4 className='header_right_button'>Join with Me</h4>
      </div>
    </div>
  )
}

export default Header1