import React from 'react'

import Globe from "../assets/Componente 9 – 1.svg"

import CircleAndLine from '../components/CircleAndLine'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ProjectLinks } from '../interfaces/Project';



const Contact = () => {
  
  const iconStyles: React.CSSProperties = {
    width: '45px',
    height: '45px'
  }

  const IconArray: ProjectLinks[] = [
    {
      Icon: GitHubIcon,
      url: "https://github.com/EduardoDevOlmedo"
    },
    {
      Icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/eduardo-antonio-mojica-013858215/"
    },
    {
      Icon: InstagramIcon,
      url: "https://www.instagram.com/_ed.xo/"
    },

  ]
  
  return (
    <section id="contact-wrapper">
      <section id="contacts">
       <div data-aos="fade-right" className="floating-points">
            <CircleAndLine isActive={false} includeLine={true} />
            <CircleAndLine isActive={false} includeLine={true} />
            <CircleAndLine isActive={true} includeLine={false} />
        </div>
        <div className="contact-text">
          <h4>Contact <br /> Me</h4>
          <img className="jello-horizontal" alt="globe" src={Globe}/>
          <p>Have a question or wanna work together? Let's do it:</p>
          <footer>
            {
              IconArray.map(element => (
              <a  
              target="_blank"
              rel="noreferrer"
              href={element.url}>
                <element.Icon
                  sx={iconStyles}
                />
              </a>
              ))
            }
          </footer>
        </div>
      </section>
    </section>
  )
}

export default Contact