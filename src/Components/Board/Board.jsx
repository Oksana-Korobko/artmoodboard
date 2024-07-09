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

  // const  layout  =  [ 
  //   {  i : "main" ,  x : 0 ,  y : 0 ,  w : 2 ,  h : 2 } ,     
  //   {  i : "pic1" ,  x : 2 ,  y : 0 ,  w : 1 ,  h : 1 } , 
  //   {  i : "1" ,  x : 3 ,  y : 0 ,  w : 1 ,  h : 1 } ,
  //   {  i : "2" ,  x : 2 ,  y : 1 ,  w : 1 ,  h : 1 } ,
  //   {  i : "3" ,  x : 3 ,  y : 1 ,  w : 1 ,  h : 1 } ,
  //   {  i : "4" ,  x : 0 ,  y : 2 ,  w : 1 ,  h : 1 } ,
  //   {  i : "5" ,  x : 1 ,  y : 2 ,  w : 1 ,  h : 1 } ,
  //   {  i : "6" ,  x : 2 ,  y : 2 ,  w : 1 ,  h : 1 } ,
  //   {  i : "7" ,  x : 3 ,  y : 2 ,  w : 1 ,  h : 1 } 

    
  // ] ; 
  
  useEffect(() => {    
      client.photos.search({query, orientation, per_page: 9 }).then(photos => {
      if (data.length===0 && photos) { setData(photos.photos)} 
           
    });      
  }, [])
  
  
 
  
  return (

    <GridLayout className="layout" cols={4} rowHeight={300} width={900}>
    {/* <MainPicture key="main" elem = {data[main]} data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}/> */}
    <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
      <MainPicture key="main" elem = {data[main]} />
    </div>
    <div key="b" data-grid={{ x: 2, y: 0, w: 1, h: 1, static: true}}>
     <PictureItem item={data[1]} key = '1'/>
    </div>
    <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
    <PictureItem item={data[2]} key = '2'/>
    </div>
  </GridLayout>



    // < GridLayout 
    //   className="layout"
    //   layout={layout}
    //   cols={4}
    //   rowHeight={100}
    //   width={1200}
    // >
    //     <MainPicture key="main" elem = {data[main]}/>
       
    //     <div key="pic1"> <PictureItem item={data[1]} key = '1'/></div>
    //     <div key="i2"> <PictureItem item={data[2]} key = '2'/></div>
    // </GridLayout>


    // {data.map((item, num) => (        
    //   <PictureItem item={item} key = {num+''}/>                  
    //   )         
    // )}
      
     
    
  )
}
