import React from 'react'
import { Link } from 'react-router-dom';
import PageLinks from './../Links'


const Home = ()=>{
    return(
        <article className='single-page'>
            <div className='navbar'>
                <div id='navbar-print'></div>
                <div className='Logo'></div>
               <div className='all-links'> {PageLinks.map((item)=>{
                    return (
                        <Link to={item.path} className={item.cName}>{item.name}</Link>
                    )
                })} 
                </div>

            </div>
        </article>
    )

}

export default Home;