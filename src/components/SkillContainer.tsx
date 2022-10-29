import { useMediaQuery } from '@mui/material';
import React from 'react'

interface Props {
    fatherStyle?: React.CSSProperties;
    childStyle?: React.CSSProperties;
    children: JSX.Element | JSX.Element[]
}

const SkillContainer:React.FC<Props> = ({fatherStyle, childStyle, children}) => {
 
  const matches = useMediaQuery('(max-width:1140px)');
  
  const smallChildStyle: React.CSSProperties = {
    position: 'absolute',
    right: '0px',
    bottom: '15px',
    background: '#303030',
    borderRadius: '10px',
    width: '320px',
    height: '625px',
    textAlign: 'center',
    padding: '15px',
    margin: 0,
    display: 'grid'
  }

  const fatherStyleDef: React.CSSProperties = {
    position: 'relative',
    width: '320px',
    height: '625px',
    background: '#f13131',    
    borderRadius: '10px',
    margin: 0

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

export default SkillContainer