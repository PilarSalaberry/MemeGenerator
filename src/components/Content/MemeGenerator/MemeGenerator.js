import React from 'react'
import './MemeGenerator.css'

const MemeGenerator = ({image,top,bottom}) => {

    console.log(image)

  return (
    <div className='memeContainer'>
      <div className='meme'>
        <p className='textTop'>{top}</p>
        <img src={image} alt='Imagen de un Meme'/>
        <p className='textBottom'>{bottom}</p>
      </div>
    </div>
  )
}

export default MemeGenerator