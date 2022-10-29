import React from 'react'

interface Props {
    name: string;
}

const Icon:React.FC<Props> = ({name}) => {
  return (
    <i className={`icon ${name}`}>

    </i>
  )
}

export default Icon