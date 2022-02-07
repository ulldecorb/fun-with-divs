// import React, { useState } from 'react';
import React from 'react';
import { Divs } from './components/Divs';
// import { Score } from './components/Score';
// import { Menu } from './components/Menu';
import './App.css';

function App() {
  // const [hitScore, setHitScore] = useState('🍻');
  // const [failScore, setFailScore] = useState('💩');

  // const handleChance = (degrees) => {
  //   let isHit = false;
  //   if (degrees === 'rotate(0deg)' || degrees === 'rotate(90deg)'
  // || degrees === 'rotate(180deg)' || degrees === 'rotate(270deg)') {
  //     isHit = true;
  //   }
  //   if (isHit) {
  //     setHitScore(`${hitScore}🍻`);
  //   } else {
  //     setFailScore(`${failScore}💩`);
  //   }
  // };

  return (
    <div className="App">
      <Divs />
      {/* <Divs handleChance={handleChance} /> */}
      {/* <Score hitScore={hitScore} failScore={failScore} /> */}
      {/* <Menu /> */}
    </div>
  );
}

export default App;
