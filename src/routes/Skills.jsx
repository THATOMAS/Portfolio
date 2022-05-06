import React from 'react'
import {Link} from 'react-router-dom'


const Skills = ()=>{
    return(
        <article id='skills-page' className='single-page'>
            <div id='skills-center'>
        
                <div id='skills-info'>
                    <h2 style={{fontSize:'3.5em'}}>What Programming<br/> Skills Do i Have?</h2>
                    <p style={{fontSize:'2em',fontWeight:'bolder'}}>I develop simple, intuitive and responsive user interface that helps users get 
                    things done with less effort and time with those technologies.</p>
                    <Link to='/Contact' className='hire-me'><h2>Hire Me</h2></Link>
                
                </div>


                <div id='skills-icons-box'>
                    <div id='skills-icons'></div>
                </div>
            </div>
            
            
            
        </article>
    )

}

export default Skills;