import React, { useState } from 'react'
import './Board.css'
import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

export default function Board(data) {
  const [main, setMain] = useState(0)
  const [page, setPage] = useState(0)
  // console.log(data)
  return (
    <div className='board'>
      <MainPicture elem = {data[main]}/>
      <PictureItem />
      <PictureItem />
      <PictureItem />
      <PictureItem />
      <PictureItem />
      <PictureItem />
      <PictureItem />
    </div>
  )
}
