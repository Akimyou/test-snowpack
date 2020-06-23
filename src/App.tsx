import React from 'react';
import logo from './logo.svg';
import './App.css';
// HERE
// import helloCommon from './commonjs/hello'
import helloEsm from './esm/hello'

// console.log('helloCommon', helloCommon)
console.log('helloEsm', helloEsm)

interface AppProps {}

function App({}: AppProps) {
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
