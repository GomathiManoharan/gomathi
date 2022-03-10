import React ,{useState}from 'react'
import {Link} from 'react-scroll'
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack5'

import './TopContent.css'

const TopContent = () => {
  return (
    
      <>
    
    <div className='topcontent'>
    <div className='topcontent_container'>
    <p>1+ exp- Desgination:Associate
Intern Experience in Web Development using HTML5,CSS3 and JavaScript
Basics Knowledge and mini project experience in Automation Testing using Selenium IDLE,Eclipse,Pycharm,Web driver,TESTNG,Cucumber Framework.
Good at Basics of Java and Python programming concepts.
Currectly practicing jQuery.
Certification done in HTML5,CSS3 and Javascripts for Web Developer
Strong UX/UI designer
Well known concepts in SDLC and Testing
Good in Communication.
Ability to learn new technologies
</p>
    <h1>Ms.Gomathi M</h1><br/>
    <p>A Professional Web Developer</p><br/>
    <a href="www.google.com">
        <button>Download CV</button>
    </a>
    <Link to="projects"smooth={true} duration={500}>
        <button>My Work</button>
    </Link>
    </div>  
    </div>
    </>
  )
}

export default TopContent

