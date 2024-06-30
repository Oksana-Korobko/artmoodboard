import React from 'react'
import { useState, useEffect } from 'react'
import './MainPicture.css'

export default function MainPicture(main) {  
  const [src, setSrc] = useState('') 
  let url = main?.elem?.url
  useEffect(() => {
    if (url) {
      setSrc(main.elem.src.medium)       
    } 
  }, [main])
  if (src){
    return (
      <div>
        <img src = {src}/>
      </div>
    )
  } else {
    return (
      <div>
        LOADING
      </div>
    )
  }
  
}
