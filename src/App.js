import './App.css';
// import '../node_modules/react-grid-layout/css/styles.css'
// import '../node_modules/react-resizable/css/styles.css'
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'
// import { useEffect, useState } from 'react';
// import { createClient } from 'pexels';

// bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf

function App() {
  // const [data,setData] = useState([]);
  // const client = createClient('bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf');
  // const query = 'pink';
  // const orientation = 'square';
  
  // useEffect(() => {    
  //     client.photos.search({query, orientation, per_page: 9 }).then(photos => {
  //     if (data.length===0 && photos) { setData(photos.photos)} 
           
  //   });      
  // }, [])
  
  
  return (
    <div className="App">
      <Header />
      <Filters />
      <Board />
    </div>
  );
}

export default App;
