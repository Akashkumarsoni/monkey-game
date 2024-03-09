import React from 'react'

interface Props{
    img:string
}

const ImageCard = (props: Props) => {
  return (
    <div className={`card`}>
      <div className='card-svg-container'>
        <img src={props.img} alt={props.img}/>
      </div>
    </div>
  )
}

export default ImageCard