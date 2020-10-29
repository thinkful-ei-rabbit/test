import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LocalStorage} from './store';

class Storage {
  // tried checking how the 'key' effects stuff
  @LocalStorage(true, 'test')
  name!: string;
}

function App() {
  var store = new Storage();
  localStorage.setItem('name', 'tttt')
  console.log(store.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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