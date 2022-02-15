import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './menu.css';

export const Menu = function Menu({ setColor, setRotation }) {
  const [rotationSpeedDivRight, setRotationSpeedDivRight] = useState('10');
  const [rotationSpeedDivLeft, setRotationSpeedDivLeft] = useState('10');
  const [divColor, setDivColor] = useState('red');
  const [backgroundColor, setBackgroundColor] = useState('#00000');

  const handleRotationSpeed = (speed) => {
    setRotationSpeedDivLeft(speed);
    setRotationSpeedDivRight(speed);
    setRotation(rotationSpeedDivRight, rotationSpeedDivLeft);
  };

  const handleDivColors = (color) => {
    setDivColor(color);
    setColor(divColor, backgroundColor);
    const menuBox = document.getElementById('menuBox');
    menuBox.style.border = `2vmin solid ${divColor}`;
    menuBox.style.color = divColor;
  };

  const handleBackgroundColor = (color) => {
    setBackgroundColor(color);
    setColor(divColor, backgroundColor);
  };

  const resetColor = () => {
    setColor('red', '#00000');
  };

  return (
    <section className="menu">
      <div id="menuBox" className="menu__box">
        <Link id="divLink" className="menu__div-link" to="../">OUT</Link>

        Rotation Speed:
        <input
          type="range"
          value={rotationSpeedDivRight}
          onChange={(e) => handleRotationSpeed(e.target.value)}
          max="10"
          min="1"
        />
        Div Color:
        <input className="input__color" type="color" value={divColor} onChange={(e) => handleDivColors(e.target.value)} />
        Background Color:
        <input className="input__color" type="color" value={backgroundColor} onChange={(e) => handleBackgroundColor(e.target.value)} />
        <button
          type="button"
          onClick={resetColor}
          className="menu__reset-color-button"
        >
          RESET COLOR
        </button>
      </div>
    </section>
  );
};

Menu.propTypes = {
  setColor: PropTypes.func.isRequired,
  setRotation: PropTypes.func.isRequired
};

export default Menu;
