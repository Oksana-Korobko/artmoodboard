import React, { useState } from 'react'
import { useEffect} from 'react';
import { createClient } from 'pexels';
import './Board.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'
import GridLayout from "react-grid-layout";

import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

export default function Board() {
  const [main, setMain] = useState(0)
  // const [page, setPage] = useState(0)
  const [data,setData] = useState([]);
  const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  const query = 'forest';
  const orientation = 'square';

  const  layout  =  [ 
    {  i : "main" ,  x : 0 ,  y : 0 ,  w : 2 ,  h : 2 } , 
    {  i : "i1" ,  x : 2 ,  y : 0 ,  w : 1 ,  h : 1 } , 
    {  i : "i2" ,  x : 3 ,  y : 0 ,  w : 1 ,  h : 1 } ,
    {  i : "i3" ,  x : 2 ,  y : 1 ,  w : 1 ,  h : 1 } ,
    {  i : "i4" ,  x : 3 ,  y : 1 ,  w : 1 ,  h : 1 } ,
    {  i : "i5" ,  x : 0 ,  y : 2 ,  w : 1 ,  h : 1 } ,
    {  i : "i6" ,  x : 1 ,  y : 2 ,  w : 1 ,  h : 1 } ,
    {  i : "i7" ,  x : 2 ,  y : 2 ,  w : 1 ,  h : 1 } ,
    {  i : "i8" ,  x : 3 ,  y : 2 ,  w : 1 ,  h : 1 } 

    
  ] ; 
  
  useEffect(() => {    
      client.photos.search({query, orientation, per_page: 9 }).then(photos => {
      if (data.length===0 && photos) { setData(photos.photos)} 
           
    });      
  }, [])
  
  
  
  return (

    < GridLayout 
        className = "layout" 
        layout = { layout } 
        cols = { 12 } 
        rowHeight = { 30 } 
        width = { 1200 } 
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>


    
      
      // { {data.map((item) => (        
      //   <PictureItem item={item} key = {item.id}/>
      // ))} */}
      
    
  )
}
