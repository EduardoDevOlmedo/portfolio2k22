import { useMediaQuery } from '@mui/material';
import React from 'react'

interface Props {
    fatherStyle?: React.CSSProperties;
    childStyle?: React.CSSProperties;
    children: JSX.Element | JSX.Element[]
}

const SkillLangContainer:React.FC<Props> = ({fatherStyle, childStyle, children}) => {
 
  const matches = useMediaQuery('(max-width:450px)');
  
  const smallChildStyle: React.CSSProperties = {
    position: 'absolute',
    right: '15px',
    bottom: '15px',
    background: '#303030',
    borderRadius: '10px',
    width: '220px',
    height: '250px',

    textAlign: 'center',
    padding: '15px',

  }

  const fatherStyleDef: React.CSSProperties = {
    position: 'relative',
    width: '220px',
    height: '250px',
    background: '#f13131',    
    borderRadius: '10px',
  }

  return (
    <div 
    style={!matches ? fatherStyle : fatherStyleDef}
    id="langSkillsFather">
      <div
        style={!matches ? childStyle : smallChildStyle}
      >
        {children}
      </div>
    </div>
  )
}

export default SkillLangContainer