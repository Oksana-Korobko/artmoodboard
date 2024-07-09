import React, { useEffect } from 'react'
import { useState } from 'react'
import './PictureItem.css'

export default function PictureItem({item}) {
  const [src, setSrc] = useState('') 
  console.log(item)
  let url = item?.url
  useEffect(() => {
    if (url) {
      setSrc(item.src.small)       
    } 
  }, [item])
  if (src){
    return (
      <div className='pictureArea'>
        {/* picture */}
        <img src = {src} />
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
