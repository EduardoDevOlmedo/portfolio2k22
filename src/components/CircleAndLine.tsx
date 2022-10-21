import React from 'react'

interface Props {
  isActive: boolean;
  includeLine: boolean;
}

const CircleAndLine: React.FC<Props>  = ({isActive, includeLine})=> {
  return (
    
  <div className={isActive ? 'circle activeCircle' : 'circle'}>
    {
      includeLine && <div className="line"></div>
    }
  </div>

  )
}

export default CircleAndLine