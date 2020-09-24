import React from 'react';
import './styles/main.css';

import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList />
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
