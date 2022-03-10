//import React,{useState} from 'react'
import {Element} from 'react-scroll'
import './Pro.css'

function Pro() {
        const proj=[
            {
           img:"MPT.jpg",
            title:"MPT App",
            desc:"It is an Application",
            
    
        },
        {
          img:"Form.PNG",
           title:"Form",
           desc:"It tells about the form validation",
           
    
       },
       {
        img:"cart.jpg",
         title:"Cart",
         desc:"It is a shopping cart",
         
  
     }
    ];
    
  return (
      <>
     <Element className='projectContainer' id="project"></Element>
     <div className="pro">
      <h1>Project</h1>
      </div>
      {
          proj.map((p)=>(
            <div className='list'>
                <h2>{p.title}</h2> 
                <h3>{p.desc}</h3>
                <img src={p.img} alt=''/>
           </div>
          
           
          ))
      }
    </>
  )
}


export default Pro
