import React from 'react'
import Boxes from './../Boxes'

const Home = ()=>{
    return(
        <article className='single-page'>
                {/*<div className='ndebele-pattern'></div>*/}
            
            <div className='first-page-center'>

                {/*<a href="../assets/WorkCV.pdf" download className="download">Download CV</a>*/}
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
                            style={{

                            background:`url(${box.img})`,
                            backgroundPosition:'center',
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            gridArea:'1 / 1 / span 1/ span 1'}}>
                            </div>
                            <div className='box-info'>
                                <h4 style={{color:'#FFCB05',fontSize:'15px'}}>
                                    {box.topInfo }<br/>
                                    <p style={{color:'white',fontSize:'1opx'}}>{box.info}</p>
                                </h4>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
                
                <div className='ndebele-pattern'></div>
        </article>
    )

}

export default Home;