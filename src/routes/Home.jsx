import React from 'react'
import { Link } from 'react-router-dom';
import PageLinks from './../Links'
import Boxes from './../Boxes'

const Home = ()=>{
    return(
        <article className='single-page'>
            <div className='navbar'>
                <div id='navbar-print'></div>
                <Link to='/' id='Logo'></Link>
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
                <div className='bottom-page-boxes'>
                    {Boxes.map((box)=>{
                        return (<div className={box.cName} 
                        key={box.id}
                        >
                            <div className='box-icon' 
                            style={{background:`url(${box.img})`,
                            backgroundPosition:'center',
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            gridArea:'1 / 1 / span 1/ span 1'}}>
                            </div>
                            <div className='box-info'
                        style={{gridArea:'1 / 2 / span 1/ span 2 '}}>
                                <h4 style={{color:'#FFCB05',fontSize:'1.5em'}}>
                                    {box.topInfo }<br/>
                                    <p style={{color:'white',fontSize:'1em'}}>{box.info}</p>
                                </h4>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
                <div className='ndebele-pattern'>

                    </div>
        </article>
    )

}

export default Home;