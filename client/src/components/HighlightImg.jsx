import React from 'react'

const HighlightImg = (props) => {
  return (
    <div className='highlight-img h-3/4'>
        <img src={props.img} alt="" className='h-full aspect-square'/>
    </div>
  )
}

export default HighlightImg