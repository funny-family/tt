import React from 'react';
import './styles/main.css';

import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Contacts />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
