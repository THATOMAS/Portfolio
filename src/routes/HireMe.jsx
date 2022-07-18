import React from 'react'

import {UseFull,ContactInfo} from "../FooterLinks"
import {Link} from 'react-router-dom'

const Contact = ()=>{

const whatsapp = require('../assets/HireMePage/whatsapp.png')


    return(
        <article id='hire-me-page'className='single-page'>
            
            <div id='contact-me-box'>
                <div id='i-hope-text'><p style={{fontSize:'3em',color:'black',fontWeight:'bold',marginLeft:'1em'}}>Hello !<br/><br/>I hope i have done enough to impress you,please get in touch with me. </p></div>
                <div id='contact-me-icons'>
                    

                    <div style={{background:`url(${whatsapp})`,
                    backgroundRepeat:'no-repeat',
                                    backgroundSize:'contain',
                                    backgroundPosition:'center',
                                    height:'3em',
                                    width:'3em'
                }}></div>
                    <p style={{fontSize:'2em',fontWeight:'bold'}}>081 472 1948</p>
                    {ContactInfo.map((contact,index)=>{
                        return(<a href={contact.info} style={{display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                            textDecoration:'none',
                            color:'black'
                        }}>
                                <div key={index} 
                                style={{
                                    background:`url(${contact.img})`,
                                    backgroundRepeat:'no-repeat',
                                    backgroundSize:'contain',
                                    backgroundPosition:'center',
                                    height:'3em',
                                    width:'3em'
                                }} >
                                </div>
                                <p style={{fontSize:'2em',fontWeight:'bold'}}>{contact.info}</p>
                            </a>)
                    })}
                </div>
            </div>
            
            <div id='hire-me-footer'>
                <div style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'flex-start',
                    height:'100%',
                    width:'20vw',}}>
                        <h3 style={{fontSize:'2em',color:'#FFCB05',marginLeft:'0.5em'}}>Thato Mashori .</h3>
                        <p style={{fontSize:'1.5em',color:'white',marginLeft:'0.5em'}}>Front-End Developer & Designer</p>    
             </div>
                <div style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'flex-start',
                    height:'100%',
                    width:'40vw',
                

                }}>
                <h3 style={{fontSize:'2.2em',color:'#FFCB05',marginLeft:'0.5em'}}>Usefull Links</h3>
                {
                    UseFull.map((singlelink,index)=>{
                        return(
                            <Link id={index}to={singlelink.path} className={singlelink.cName}>{singlelink.name}</Link>
                            )
                    })
                }
                    
                </div>
                <div style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'flex-start',
                    height:'100%',
                    width:'40vw',

                }}>
                  <h3 style={{fontSize:'2.2em',color:'#FFCB05',marginLeft:'0.5em'}}>Contact Me </h3>   
                    {
                        ContactInfo.map((contact,index)=>{
                            return(
                                <a key={index} href={contact.info} className={contact.cName}>{contact.name}</a>
                                )
                        })
                    }
                </div>
                    
            </div>
        
        </article>
    )

}

export default Contact;