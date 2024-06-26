import './App.css';
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board'

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Board />
    </div>
  );
}

export default App;
