import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './menu.css';

export const Menu = function Menu({ setColor, setRotation }) {
  const [rotationSpeedDivRight, setRotationSpeedDivRight] = useState('10');
  const [rotationSpeedDivLeft, setRotationSpeedDivLeft] = useState('10');
  const [divColor, setDivColor] = useState('#ff0000');
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
    const divLink = document.getElementById('divLink');
    divLink.style.color = divColor;
    divLink.style.border = `2vmin solid ${divColor}`;
  };

  const handleBackgroundColor = (color) => {
    setBackgroundColor(color);
    setColor(divColor, backgroundColor);
    const menu = document.getElementById('menu');
    menu.style.backgroundColor = backgroundColor;
  };

  const reset = () => {
    setColor('red', '#00000');
    setRotation(10, 10);
  };

  return (
    <section id="menu" className="menu">
      <div id="menuBox" className="menu__box">
        <Link id="divLink" className="menu__div-link" to="../">X</Link>
        Rotation Speed:
        <div className="menu__speed-box">
          MAX
          <input
            type="range"
            value={rotationSpeedDivRight}
            onChange={(e) => handleRotationSpeed(e.target.value)}
            max="10"
            min="1"
            className="input__speed"
            id="speed"
          />
          MIN
        </div>
        Div Color:
        <input className="input__color" type="color" value={divColor} onChange={(e) => handleDivColors(e.target.value)} />
        Background Color:
        <input className="input__color" type="color" value={backgroundColor} onChange={(e) => handleBackgroundColor(e.target.value)} />
        <button
          type="button"
          onClick={reset}
          className="menu__reset-color-button"
        >
          RESET
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
