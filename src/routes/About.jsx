import React from 'react'
import {Link} from 'react-router-dom'

const About = ()=>{
    return(
        <article id='about-page' className='single-page'>
            
            <div id='about-page-center'>
                
            <div id='about-page-photo'></div>

            <div id='about-page-info'>
                <h4 style={{fontSize:'3em',color:'#FFCB05'}}>Who am I?</h4>
                <p id='about-page-text'>
                    Hi! I’m Thato Mashori, and I’m a designer and developer who loves to create awesome websites that stand out.
                    <br/><br/>
                    I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts.
                </p>
                <Link to='/Contact' id='hire-me'><h2>Hire Me</h2></Link>
            </div>
            </div>
            
        </article>
    )

}

export default About;