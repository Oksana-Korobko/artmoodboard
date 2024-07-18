import React, { useEffect } from 'react'
import { useState } from 'react'
import './PictureItem.css'

export default function PictureItem({item, onChoiceMain}) {
  const [src, setSrc] = useState('') 


  useEffect(() => {
    setSrc(item.src.large);
  }, [])
  
  return (
    <div className='block'><img alt = {'referens'} src = {src} onClick={()=>{{onChoiceMain(src)}}}/></div>
  )
}
