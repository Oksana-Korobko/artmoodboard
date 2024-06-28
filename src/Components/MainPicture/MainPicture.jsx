import React from 'react'
import './MainPicture.css'

export default function MainPicture({url}) {
  return (
    <div>
      <img src = {url}/>
    </div>
  )
}
