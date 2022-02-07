import React, { useState } from 'react';
// import React from 'react';
import { Divs } from './components/Divs';
import { Score } from './components/Score';
// import { Menu } from './components/Menu';
import './App.css';

function App() {
  const [hitScore, setHitScore] = useState('🍻');
  const [failScore, setFailScore] = useState('💩');

  const handleChance = (isHit) => {
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
