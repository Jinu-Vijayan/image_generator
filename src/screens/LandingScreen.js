import React, { useRef, useState } from 'react'
import axios from 'axios'
import './LandingScreen.css'
import data from '../key.json'

const LandingScreen = () => {

    const inputRef = useRef();
    const [imageLink, setImageLink] = useState();

    const baseUrl = 'https://api.unsplash.com/search/photos?per_page=1&query='

    function clickHandler(){
        console.log(inputRef.current.value);
        const options = {
            method: "get",
            url : `${baseUrl}${inputRef.current.value}&client_id=${data.access_key}`,
        }

        axios(options)
        .then((res)=>{
            console.log(res.data.results[0].urls.regular)
            setImageLink(res.data.results[0].urls.regular);
        })
    }
  return (
    <div id='container'>
        <header>
            <h1>Image generator</h1>
        </header>
        <div id='input-container'>
            <input ref={inputRef} type='text' placeholder='input key'/>
            <button onClick={clickHandler}>Generate</button>
        </div>
        <div id='image-container'>
            {imageLink && <img src = {imageLink} alt={`image of ${inputRef.current?.value}`}/>}
        </div>
    </div>
  )
}

export default LandingScreen;