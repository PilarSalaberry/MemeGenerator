import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MemeForm from './MemeForm/MemeForm'
import MemeGenerator from './MemeGenerator/MemeGenerator'
import './Content.css'

function Content() {
    const [topText, setTopText] = useState()
    const [bottomText, setBottomText] = useState()
    const [randomImg, setRandomImg] = useState(undefined)

    const updateInputs = (top, bottom) => {
        setTopText(top)
        setBottomText(bottom)
    }
    
    const getIndex = () => {
        let index = Math.floor(Math.random() * 100)
        return index
    }

    useEffect(() => {
        axios
        .get('https://api.imgflip.com/get_memes')
        .then((resp) => {
            const data = resp.data.data.memes;
            
            const index = getIndex()
            
            setRandomImg(data[index].url)
        })
    }, [topText, bottomText]);


    return (
    <div className='content'>
        <MemeForm handleSubmit={updateInputs}/>
        {topText && bottomText && <MemeGenerator image={randomImg} top={topText} bottom={bottomText}/>}
    </div>
  )
}

export default Content