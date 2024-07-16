import React, { useState, useEffect} from 'react'
import './Board.css'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPicture from '../MainPicture/MainPicture'
import PictureItem from '../PictureItem/PictureItem'

import { createClient } from 'pexels';


export default function Board() {
  const [data,setData] = useState([]);
  const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  const query = 'sea sunrise';
  
  let main = 0
  useEffect(() => {    
      client.photos.search({query, orientation: 'square', per_page: 25 }).then(photos => {
      if (data.length===0 && photos) { setData(photos.photos)} 
           
    });      
  }, [])
  
  
  return (
    <div className='board'>
       <Container>
      <Row>
        <Col sm = {12} md = {6}>
          <MainPicture elem = {data[main]}/>
        </Col>
        <Col  sm = {12} md = {6}>
          <Row >
            {data.map((item, i) => ( 
              (i>0) && (<Col sm={3}><PictureItem item={item} key = {item.id}/></Col> )             
            ))}
          </Row>          
        </Col>
      </Row>
      
    </Container>



      
      
    </div>
  )
}
