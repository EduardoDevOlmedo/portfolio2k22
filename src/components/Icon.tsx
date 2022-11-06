import React from 'react'

interface Props {
    name: string;
    style?: React.CSSProperties;
}

const Icon:React.FC<Props> = ({name, style}) => {
  return (
    <i className={`icon ${name}`} style={style}>

    </i>
  )
}

export default Icon