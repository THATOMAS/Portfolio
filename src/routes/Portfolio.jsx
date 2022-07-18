
import React ,{useState}from 'react'
import Buttons from '../PortfolioButtons';
import Projects from '../Projects'
import InfoBox from '../InfoBox'

const Portfolio = ()=>{

    
    const [projects,setProjects] = useState(Projects)

    const filterProjects = (category)=>{
        const newProjects = Projects.filter((project)=> project.category === category )
        setProjects(newProjects)
        if(category === 'All'){
            setProjects(Projects)
            return
        }
    }


    return(
        <article id='portfolio-page' className='single-page'>
            <div id="portfolio-page-center">
            <h1 id='portfolio-heading'>Featured Works</h1>
            <div id='portfolio-buttons'>
                {Buttons.map((button)=>{
                    return(
                        <button type='button' key={button.id} className={button.cName} onClick={()=>filterProjects(button.name)}>
                            <p>{button.name}</p>

                        </button>
                    )
                })}
            </div>
            <div id='underline'></div>
            <div id='portfolio-projects'>
                {projects.map((project)=>{

                    return (
                        <div id='project-box'>
                        <p style={{fontSize:'2.5em',color:'black',fontWeight:"bold",margin:'1em',}}>{project.name}</p>

                        <a
                        href={project.link} 
                        key={project.id} 
                        className={project.cName} 
                        style={{height:'40em',
                        width:'35em',
                        margin:'1em',
                        background:`url(${project.img})`,
                        backgroundPosition:'left center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'512px 315px',
                        borderRadius:'0.5em',
                        border:'5px solid #FFCB05',
                        cursor:'pointer',
                        display:"flex",
                        flexWrap:"wrap",
                        alignItems:'flex-start',
                        justifyContent:'center'

                        }}>
                    
                        </a>

                        </div>
                    )
                })}
            </div>
            </div>
        </article>
    )

}

export default Portfolio;