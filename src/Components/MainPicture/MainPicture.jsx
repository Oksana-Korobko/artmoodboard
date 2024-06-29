import React from 'react'
import { useState, useEffect } from 'react'
import './MainPicture.css'

export default function MainPicture(main) {  
  const [src, setSrc] = useState('') 
  let url = main?.elem?.url
  useEffect(() => {
    if (url) {
      setSrc(main.elem.src.medium)
      console.log(src)    
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
