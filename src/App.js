
import './App.css';
import { Counter } from './components/Counter';
import { Cuerpo } from './components/Cuerpo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cuerpo></Cuerpo>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
