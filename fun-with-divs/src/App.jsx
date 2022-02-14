import React, { useState } from 'react';
// import React from 'react';
// import React from 'react';
import { Divs } from './components/Divs';
import { Score } from './components/Score';
import { Menu } from './components/Menu';
import './App.css';

function App() {
  const [hitScore, setHitScore] = useState('🍻');
  const [failScore, setFailScore] = useState('💩');
  const [divColor, setDivColor] = useState('red');
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const handleCheckFire = (isHit) => {
    if (isHit) {
      setHitScore(`${hitScore}🍻`);
    } else {
      setFailScore(`${failScore}💩`);
    }
  };

  const setColor = (divColorProp, backgroundColorProp) => {
    setDivColor(divColorProp);
    setBackgroundColor(backgroundColorProp);
  };

  return (
    <div className="App">
      <Menu setColor={setColor} />
      <Divs
        handleCheckFire={handleCheckFire}
        divColor={divColor}
        backgroundColor={backgroundColor}
      />
      <Score hitScore={hitScore} failScore={failScore} />
    </div>
  );
}

export default App;
