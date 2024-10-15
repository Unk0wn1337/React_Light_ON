import logo from './logo.svg';
import './App.css';
import JatekTer from './components/Jatekter';

function App() {

  const lista = [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ];

    function katt(adat){
      
    }



  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          LightON - PythON
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        <JatekTer lista={lista}/>
      </article>
      <footer>
        <p>Simon Kende</p>
      </footer>

    </div>
  );
}

export default App;
