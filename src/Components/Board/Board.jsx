import React, { useState } from 'react'
import { useEffect} from 'react';
import { createClient } from 'pexels';
import './Board.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
// import GridLayout from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

export default function Board() {
  const [main, setMain] = useState(0)
  // const [page, setPage] = useState(0)
  const [data,setData] = useState([]);
  const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  const query = 'forest';
  const orientation = 'square';
  const layouts = [
    { i: "main", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 2, y: 0, w: 1, h: 1},
    { i: "c", x: 3, y: 0, w: 1, h: 1 }
  ];

  
  useEffect(() => {    
      client.photos.search({query, orientation, per_page: 9 }).then(photos => {
      if (data.length===0 && photos) { setData(photos.photos)} 
           
    });      
  }, [])
  
  
 
  
  return (

    <ResponsiveGridLayout 
      compactType={'vertical'}
      autoSize
      rowHeight={300}
      className="layout" 
      layouts={layouts} 
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >   
      <div key="main" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
      {/* <MainPicture key="main" elem = {data[main]} /> */}
    </div>

    {data.map((item, num) => (  
        <div key = {num+''} data-grid={{ x: 2, y: 0, w: 1, h: 1, static: true}}>
          {/* <PictureItem item={item} key = {num}/> */}
        </div>                           
      )         
    )}

    
  </ResponsiveGridLayout>



     
    
  )
}
