import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Divs } from './components/Divs';
import { Menu } from './components/Menu';
import './App.css';

function App() {
  const [hitScore, setHitScore] = useState('🍻');
  const [failScore, setFailScore] = useState('💩');
  const [divColor, setDivColor] = useState('red');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [rotationSpeedDivRight, setRotationSpeedDivRight] = useState('rotateDivRight 10s linear 0s infinite normal none;');
  const [rotationSpeedDivLeft, setRotationSpeedDivLeft] = useState('rotateDivLeft 10s linear 0s infinite normal none;');

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

  const setRotation = (speed) => {
    setRotationSpeedDivRight(`rotateDivRight ${speed}s linear 0s infinite normal none`);
    setRotationSpeedDivLeft(`rotateDivLeft ${speed}s linear 0s infinite normal none`);
  };

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={(
              <Divs
                handleCheckFire={handleCheckFire}
                divColor={divColor}
                backgroundColor={backgroundColor}
                rotationSpeedDivRight={rotationSpeedDivRight}
                rotationSpeedDivLeft={rotationSpeedDivLeft}
                hitScore={hitScore}
                failScore={failScore}
              />
)}
          />
          <Route path="menu" element={<Menu setColor={setColor} setRotation={setRotation} />} />
        </Routes>
      </Router>
      {/* <Menu setColor={setColor} setRotation={setRotation} />
      <Divs
        handleCheckFire={handleCheckFire}
        divColor={divColor}
        backgroundColor={backgroundColor}
        rotationSpeedDivRight={rotationSpeedDivRight}
        rotationSpeedDivLeft={rotationSpeedDivLeft}
        hitScore={hitScore}
        failScore={failScore}
      /> */}
    </div>
  );
}

export default App;
