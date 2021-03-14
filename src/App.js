import './App.css';
import Clock from './Clock';
import Help from './Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Clock></Clock>
      <footer>
        <Help />
      </footer>
    </div>
  );
}

export default App;
