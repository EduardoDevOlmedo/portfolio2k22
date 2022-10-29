import React from 'react'
import { names, Text } from '../utils/text'
import Icon from './Icon'
import Paragraph from './Paragraph'
import SkillLangContainer from './SkillLangContainer'

const Tecnologies = () => {
    const {skills: {bio}} = Text;
  
  
    return (
    <div data-aos="fade-down" className="tech-skills">
    <div data-aos="fade-down">
        <h2>Skills</h2>
    </div>
    <article className="skills-short">
        <Paragraph text={bio} />
    </article>
    <div className="tecs">
        <SkillLangContainer 
            fatherStyle={
                {
                    width: '430px',
                    height: '175px',
                    background: '#f13131',
                    borderRadius: '10px',
                }
            }
            childStyle={
                {
                    width: '430px',
                    height: '175px',
                    background: '#303030',
                    borderRadius: '10px',
                    padding: '15px'

                }
            }
        >
            <h3>
                Languages and technologies
            </h3>
            <div style={{
                    padding:'24px'
            }}>
                {
                   names.map((el, index) => <Icon name={el} key={index}/>)
                }
            </div>
        </SkillLangContainer>
    </div>
</div>
  )
}

export default Tecnologies