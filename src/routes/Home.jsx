import React from 'react'
import { Link } from 'react-router-dom';
import PageLinks from './../Links'


const Home = ()=>{
    return(
        <article className='single-page'>
            <div className='navbar'>
                <div id='navbar-print'></div>
                <div id='Logo'></div>
               <div className='all-links'> {PageLinks.map((item)=>{
                    return (
                        <Link to={item.path} className={item.cName}>{item.name}</Link>
                    )
                })} 
                </div>
            </div>
            <div className='first-page-center'>
                    <div id='hi-im'>
                        <h2 className='name'>Hi,I Am <span className='name highlight'>Thato Mashori</span></h2> 
                        <div id='hello-emoji'></div>
                     </div>
                    <h2 id='front-end'>Front-End Developer</h2>
                    <p id='text'>I design and code beautiful Websites, and I love what I do.</p>
                    <div className='small-photo'></div>
                </div>
        </article>
    )

}

export default Home;