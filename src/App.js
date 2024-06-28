import './App.css';
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'
import { useLayoutEffect } from 'react';
import { createClient } from 'pexels';

// bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf

function App() {
  const data = [];
  const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  const query = 'Nature';
  
  useLayoutEffect(() => {    
      client.photos.search({query, per_page: 9 }).then(photos => {
      if (data.length===0) {data.push(...photos.photos)} 
      console.log('query')
           
    });   
    
  }, [])
  console.log(data[0])
  return (
    <div className="App">
      <Header />
      <Filters />
      <Board data = {data}/>
    </div>
  );
}

export default App;
