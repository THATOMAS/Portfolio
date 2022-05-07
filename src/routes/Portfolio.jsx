import React from 'react'
import Buttons from '../PortfolioButtons';
const Portfolio = ()=>{
    return(
        <article id='portfolio-page' className='single-page'>
            <div id="portfolio-page-center">
            <h1 id='portfolio-heading'>Featured Works</h1>
            <div id='portfolio-buttons'>
                {Buttons.map((button)=>{
                    return(
                        <div key={button.id} className={button.cName}>
                            <p>{button.name}</p>

                        </div>
                    )
                })}
            </div>
            <div id='underline'></div>
            <div id='portfolio-projects'>

            </div>
            </div>
        </article>
    )

}

export default Portfolio;