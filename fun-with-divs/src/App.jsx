import React from 'react';
import { Divs } from './components/Divs';
import { Counter } from './components/Counter';
import { Menu } from './components/Menu';
import './App.css';

function App() {
  // const divRigthRotationDegree = 0;
  // const divLeftRotationDegree = 0;

  return (
    <div className="App">
      <Divs />
      <Counter />
      <Menu />
    </div>
  );
}

export default App;
