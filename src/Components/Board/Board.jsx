import React, { useState } from 'react'
import './Board.css'
import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

export default function Board({data}) {
  const [main, setMain] = useState(0)
  // const [page, setPage] = useState(0)
  
  return (
    <div className='grid-container'>
      <MainPicture elem = {data[main]}/>
      {data.map(item => (        
        <PictureItem item={item} key = {item.id}/>
      ))}
      
    </div>
  )
}
