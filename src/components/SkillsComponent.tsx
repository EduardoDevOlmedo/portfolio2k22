import React from 'react'
import ApiIcon from '@mui/icons-material/Api';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import IconAndText from './IconAndText';
import SkillContainer from './SkillContainer';
import { Text } from '../utils/text';

const SkillsComponent = () => {
    
    const {skills: {proactive, helper, backendSkills, fastLearner}} = Text;

 
    return (
    <div data-aos="fade-up" 
    style={{
        position: 'sticky'
    }}
    className="skills-pro">
    <SkillContainer
          fatherStyle={
            {
                width: '530px',
                height: '625px',
                background: '#f13131',
                borderRadius: '10px',
            }
        }
        childStyle={
            {
                width: '530px',                      
                height: '625px',
                background: '#303030',
                borderRadius: '10px',
                padding: '15px',
                bottom: '15px',
                right: '15px',
                display: 'grid'
            }
        }
    >
            <IconAndText
                title="Backend"
                text={backendSkills}
            >
               <ApiIcon 
                 sx={{
                     fontSize: '40px',
                     color: '#F13131'
                 }}
                 />
            </IconAndText>
            <IconAndText
                title="Helper"
                text={helper}
            >
                <AccessibilityIcon  
                    sx={{
                        fontSize: '40px',
                        color: '#F13131'
                    }}
                />
            </IconAndText>
            <IconAndText 
                title="Fast Learner"
                text={fastLearner}
                stringIcon='fastLearner'
            />
            <IconAndText 
                title="Proactive"
                text={proactive}
                
            >
                <EmojiObjectsIcon 
                     sx={{
                        fontSize: '40px',
                        color: '#F13131'
                    }}
                />    
            </IconAndText> 
    </SkillContainer>
</div>
  )
}

export default SkillsComponent