import { useMediaQuery } from '@mui/material';
import React from 'react'

interface Props {
    fatherStyle?: React.CSSProperties;
    childStyle?: React.CSSProperties;
    children: JSX.Element | JSX.Element[]
}

const SkillContainer:React.FC<Props> = ({childStyle, children}) => {
 
  const matches = useMediaQuery('(max-width:1140px)');
  
  const smallChildStyle: React.CSSProperties = {
    right: '0px',
    bottom: '15px',
    background: '#303030',
    borderRadius: '20px',
    textAlign: 'center',
    padding: '15px',
    margin: 0,
    display: 'grid',
    border: '4px solid #000'
  }



  return (
      <div
        style={!matches ? childStyle : smallChildStyle}
      >
        {children}
    </div>
  )
}

export default SkillContainer