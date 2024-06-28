import './App.css';
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'
import { useEffect } from 'react';
import { createClient } from 'pexels';

// bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf

function App() {
  const data = [];
  const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  const query = 'Nature';
  
  useEffect(() => {    
      client.photos.search({query, per_page: 20 }).then(photos => {
      if (data.length===0) {data.push(...photos.photos)}      
    });    
    console.log(data)
  }, [])

  return (
    <div className="App">
      <Header />
      <Filters />
      <Board data = {data}/>
    </div>
  );
}

export default App;
