import React from 'react'
import './MemeForm.css'

const MemeForm = ({handleSubmit}) => {


  return (
    <div className='memeForm'>
        <form onSubmit={e => {e.preventDefault(); handleSubmit(e.target.input1.value, e.target.input2.value)}}>
    
            <input name="input1" placeholder='Top Text'  />
            <input name="input2" placeholder='Bottom Text'   />
            <button className='memeButton'>Generar</button>
        </form>

    </div>
  )
}

export default MemeForm