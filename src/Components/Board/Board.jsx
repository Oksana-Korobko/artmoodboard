import React from 'react'
import './Board.css'
import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

export default function Board() {
  return (
    <div className='board'>
      <MainPicture />
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
