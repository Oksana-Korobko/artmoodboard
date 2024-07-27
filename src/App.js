import './App.css';
import React, {useState} from 'react'
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'
// import { createClient } from 'pexels';

// bRl7IXvNx9GykmRGXzIpSjMKVPv6KA369K4oMyf7KKEimiQLJHHSMuXf

function App() {
  const [query,setQuery] = useState('minimalism')
  const [theme, setTheme] = useState('light')
  const onSwitchTheme = (theme) => {
    // setTheme((cur) => cur==="light"? "dark" : "light")
    console.log(theme)
  }

  

  const onChangeQuery = (query) => {
    setQuery(query)
  }
  
  const onFilter = (query) => {    
    setQuery(query)
    // console.log(query)
  }
  // console.log('render')
  return (
    <div className="App">
      <Header theme = {theme} onSwitchTheme = {onSwitchTheme} />
      <Filters onFilter = {onFilter} query={query}/>
      <Board query={query}/>
      <footer>Створено Оксаною Коробко для натхнення. Творіть, друзі! </footer>
    </div>
  );
}

export default App;
