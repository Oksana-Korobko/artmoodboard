import './App.css';
import React, {useState} from 'react'
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'
// import { useEffect, useState } from 'react';
// import { createClient } from 'pexels';

// bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf

function App() {
  const [query,setQuery] = useState('nature')
  
  const onChangeQuery = (query) => {
    setQuery(query)
  }
  
  
  return (
    <div className="App">
      <Header />
      <Filters onChangeQuery = {onChangeQuery}/>
      <Board query={query}/>
      <footer>Створено Оксаною Коробко для натхнення. Творіть, друзі! </footer>
    </div>
  );
}

export default App;
