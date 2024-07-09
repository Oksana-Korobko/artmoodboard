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
      <div className='mainPictureDiv'>
        {/* mainPicture */}
        <img src = {src} className='mainPicture'/>
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
