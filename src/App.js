
import './App.css';
import { AddJugador } from './components/AddJugador';
import { Cuerpo } from './components/Cuerpo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cuerpo></Cuerpo>
        <hr/>
       <AddJugador/>  
      </header>
    </div>
  );
}

export default App;
