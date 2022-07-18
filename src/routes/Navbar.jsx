import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import PageLinks from './../Links'


const Navbar=()=>{
    return(<article id='nav-container'>
<div className='navbar'>
                <div id='navbar-print'></div>
                <Link to='/' id='Logo'></Link>

               <div className='all-links'> {PageLinks.map((item)=>{
                    return (
                        <Link to={item.path} className={item.cName}>{item.name}</Link>)
                        }
                    )
                } 
                </div> 
                
</div>

<Outlet />
</article>)
}



export default Navbar