import React, { useState } from 'react';
// import React from 'react';
import { Divs } from './components/Divs';
import { Score } from './components/Score';
// import { Menu } from './components/Menu';
import './App.css';

function App() {
  const [hitScore, setHitScore] = useState('🍻');
  const [failScore, setFailScore] = useState('💩');

  const handleChance = (degrees) => {
    let isHit = false;
    if (degrees === 'matrix(1, 0, 0, 1, 0, 0)' || degrees === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'
  || degrees === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)' || degrees === 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {
      isHit = true;
    }
    // console.log(`isHit : ${isHit}`);
    if (isHit) {
      setHitScore(`${hitScore}🍻`);
    } else {
      setFailScore(`${failScore}💩`);
    }
  };

  return (
    <div className="App">
      <Divs handleChance={handleChance} />
      <Score hitScore={hitScore} failScore={failScore} />
      {/* <Menu /> */}
    </div>
  );
}

export default App;
