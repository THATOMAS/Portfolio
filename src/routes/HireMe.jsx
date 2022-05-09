import React from 'react'

const Contact = ()=>{
    return(
        <article id='hire-me-page'className='single-page'>
            
            <div id='contact-me-box'>
                <h2 id='i-hope-text'></h2>
                <div id='contact-me-icons'></div>
            </div>
            
            <div id='hire-me-footer'>
                <div style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'center',
                    height:'100%',
                    width:'20vw',}}>
                        <h3 style={{fontSize:'2em',color:'#FFCB05',marginLeft:'0.5em'}}>Thato Mashori .</h3>
                        <p style={{fontSize:'1.5em',color:'white',marginLeft:'0.5em'}}>Front-End Developer & Designer</p>    
                </div>
                <div style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'center',
                    height:'100%',
                    width:'40vw',
                    background:'red'

                }}>
                    
                </div>
                    
            </div>
        
        </article>
    )

}

export default Contact;