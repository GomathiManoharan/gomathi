import React from 'react'
import {Element} from 'react-scroll'
import Project from '../Project/Project'
import './ProjectContainer.css'

const ProjectContainer = () => {
    const project=[{
       img:"./Images/MPT.jpg",
        title:"React",
        Description:"Progress",
        

    },
    {
      img:"./Images/MPT.jpg",
       title:"React",
       desc:"Progress",
       

   }]
  return (
    <Element className='projectContainer' id="project">
        <h1>Projects</h1>
        <p>Real time project</p>
        <div className='projectContainer_projects'>
          {
            project.map((project,index)=>{
              return(
                <Project key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}/>

              )
            })
          }
        </div>
    </Element>
  )
}

export default ProjectContainer
