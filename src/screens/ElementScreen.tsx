import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import Carrousel from '../components/Carrousel'
import Icon from '../components/Icon'
import { ProjectScreen } from '../interfaces/Project'
import GitHubIcon from '@mui/icons-material/GitHub';


const ElementScreen:React.FC<ProjectScreen> = ({

    title,description, Icon: IncomingIcon, iconClassNames, images, repoUrl, shouldContain

}) => {
 
 
  const matches = useMediaQuery("(min-width:800px)")



  return (
    <>
       <section id="project">
            <div className='titleImageContainer'>
                <h4>
                    {title}
                </h4>
                <IncomingIcon />
            </div>
            <div className='project-desc'>
                <p>
                  {description}
                </p>

                <div>
                    {
                      iconClassNames.map((className) => (
                        <Icon name={className} 
                              style={{
                                filter: "invert(64%) sepia(181%) saturate(5666%) hue-rotate(348deg) brightness(103%) contrast(119%)"
                              }}
                        />
                      ))
                    }
                </div>
                <div style={{
                  width: '280px',
                  margin: '0 auto'
                }}>
                 <Carrousel shouldContain={shouldContain} images={images} />
                </div>
                <Button     className="btn-desc"
                            href={repoUrl}
                            target="_blank"
                            variant='contained'
                            sx={{   
                                width: '30%',
                                height: '46px',
                                background: '#f13131',
                                fontFamily: 'Montserrat',
                                transition: 'ease-in 0.25s',
                                padding: "5px",
                                minWidth: "100px",
                                margin: matches ? 0 : '0 auto',
                                textAlign: 'center',
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
                          >
                            <GitHubIcon />
                          </Button>
            </div>
       </section>
    </>
  )
}

export default ElementScreen