import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  const [response, setResponse] = useState("");
  useEffect(() => {
    fetch('/api')
      .then(data => data.text())
    .then(setResponse)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {response}
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
    </div>
  );
}

export default App;
