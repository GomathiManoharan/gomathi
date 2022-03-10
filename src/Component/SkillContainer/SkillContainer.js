import React from 'react'
import './SkillContainer.css'
import {Element} from 'react-scroll'
import LinearProgress from '@material-ui/core/LinearProgress'



const SkillContainer = () => {
  return (
    <div>
      <Element className='skillcontainer' id='skills'>
      <div className='skill'>
      <div className='skillContainer_image'>
        <img src='./new.jpg' alt=''/>
      </div>
      <div className='skillcontainer_skillset'>
        <h2>SKILLSET</h2>
            <div className='skill_slider'>
                    <h5>React</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={70} />
                </div> 
            </div>
            
            <div className='skill_slider'>
                    <h5>JS</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={40} />

                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>CSS</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={70} />   
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>HTML</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={75} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>Java-Basics</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={35} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>Python-Basics</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={20} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>Automation Testing - Selenium </h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={25} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>MS-Excel</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={50} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>Photoshop</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={40} />
                </div> 
            </div>
            <div className='skill_slider'>
                    <h5>Android - Basics</h5>
                <div className='skill_slide'>
                <LinearProgress variant="determinate" value={35} />
                </div> 
            </div>
      </div>
      </div>
      </Element>
    </div>
  )
}

export default SkillContainer
