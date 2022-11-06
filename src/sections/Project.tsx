import React, { useState } from 'react'
import CircleAndLine from '../components/CircleAndLine';
import { Button } from '@mui/material';
import { useTransition, animated, config } from 'react-spring';
import { Project } from '../interfaces/Project';
import { ProjectText } from '../utils/text';




const Projects = () => {
  

    const startingProjects: Project[] = [
        ProjectText[0], ProjectText[1]
    ] 


    let [projectCount, setProjectCount] = useState<Project[]>([
        ...startingProjects
    ])    


  
    const transition = useTransition(projectCount, {
        from: {x: -200, y : 800, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x: 200, y: 500, opacity: 0},
        delay: 20,
        config: config.stiff
    })

  
    const handleAdd = () => {

        
        if(projectCount.length === ProjectText.length + 1) return

        setProjectCount([
            ...projectCount,
            ...[ProjectText[projectCount.length]]
        ])
        
    }
    


    const handleEliminate = () => {
        if(projectCount.length !== 2) setProjectCount(startingProjects)
    }

    return (
    <>
        <section id="projects">
        <div data-aos="fade-right" className="floating-points">
            <CircleAndLine isActive={false} includeLine={true} />
            <CircleAndLine isActive={true} includeLine={true} />
            <CircleAndLine isActive={false} includeLine={false} />
        </div>
            <div data-aos="fade-down">
                <h2>Projects</h2>
            </div>
            <div className='box-container'>
         {
                  transition((style, item) => 
                    item ? <animated.div className="animated-div" style={style}>
                           <div>
                              <item.Icon />
                               <h4>
                               {item.title}
                               </h4>
                           </div>
                        <p style={{margin: '30px'}}>
                            {item.description?.substring(0, 200) + '...'}
                        </p>
                        <Button
                            href={`projects/${item.url}`}
                            variant='contained'
                            sx={{   
                                width: '75%',
                                margin: '0 auto',
                                height: '46px',
                                background: '#f13131',
                                fontFamily: 'Montserrat',
                                transition: 'ease-in 0.25s',
                                ':hover': {
                                    background: 'transparent',
                                    border: '3px solid #f13131',
                                    opacity: '0.5',
                                    color: '#F13131',
                                    fontWeight: 'bold',
                                    transition: 'ease-in 0.25s',
                                    cursor: 'pointer'
                                  },
                            }}
                        >See more</Button>
                    </animated.div> : ''
                  )
        }
            </div>
            <div className="btncont">
                {
                    projectCount.length !== 2 && (
                        <Button
                        variant="contained"
                        sx={{   
                            color: '#fff',
                            background: '#f13131',
                            fontFamily: 'Montserrat',
                            transition: 'ease-in 0.25s',

                            ':hover': {
                                background: 'transparent',
                                border: '1px solid #f13131',
                                opacity: '0.5',
                                transition: 'ease-in 0.25s',
                                cursor: 'pointer'
                              },
                        }}
                        onClick={handleEliminate}>Load less</Button>
                    )
                }

                {
                    projectCount.length !== ProjectText.length   &&
                    (
                        <Button 
                        sx={{
                            fontFamily: 'Montserrat',
                            color: '#fff',
                            transition: 'ease-in 0.25s',
                            padding: '10px',
                            ':hover': {
                                opacity: '0.5',
                                transition: 'ease-in 0.25s',
                                cursor: 'pointer'
                              },
                        }}
                        onClick={handleAdd}>Show more projects</Button>
                    )
                }
            </div>
        </section>
    </>
  )
}

export default Projects