import React from 'react'
import "./iconComp.scss"

const IconComp = ({icon, data}) => {
  return (
    <div className='icon-box'>
        <h3 className='icon-img'>{icon}</h3>
        <p className='icon-name'>{data}</p>
    </div>
  )
}

export default IconComp