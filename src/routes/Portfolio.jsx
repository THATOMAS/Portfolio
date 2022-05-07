
import React ,{useState}from 'react'
import Buttons from '../PortfolioButtons';
import Projects from '../Projects'
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
                        <div key={project.id} 
                        className={project.cName} 
                        style={{height:'50vh',
                        width:'32vw',
                        margin:'1em',
                        background:`red`,
                        borderRadius:'0.5em'
                        
                        
                        
                        }}>

                        </div>
                    )
                })}
            </div>
            </div>
        </article>
    )

}

export default Portfolio;