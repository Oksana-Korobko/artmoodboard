import React, { useEffect } from 'react'
import { useState } from 'react'
import './PictureItem.css'

export default function PictureItem({item}) {
  const [src, setSrc] = useState('') 
  console.log(item)

  useEffect(() => {
    setSrc(item.src.small);
  }, [])
  
  return (
    <div><img src = {src}/></div>
  )
}
