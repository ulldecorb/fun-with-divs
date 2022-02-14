import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './menu.css';

export const Menu = function Menu({ setColor }) {
  const [divColor, setDivColor] = useState('red');
  const [backgroundColor, setBackgroundColor] = useState('#00000');

  const handleDivColors = (color) => {
    setDivColor(color);

    setColor(divColor, backgroundColor);
    const menuBox = document.getElementById('menuBox');
    menuBox.style.border = `2vmin solid ${divColor}`;
  };

  const handleBackgroundColor = (color) => {
    setBackgroundColor(color);
    setColor(divColor, backgroundColor);
  };

  const resetColor = () => {
    setDivColor('red');
    setBackgroundColor('#00000');
  };

  return (
    <section className="menu">
      <div id="menuBox" className="menu__box">
        Div Color:
        <input className="input input__div-color" type="color" value={divColor} onChange={(e) => handleDivColors(e.target.value)} />
        Background Color:
        <input className="input input__background-color" type="color" value={backgroundColor} onChange={(e) => handleBackgroundColor(e.target.value)} />

        {/* <input type="range" name="rotation-speed" id="rotation-speed" max="10" min="2" />
        <form onSubmit={handleColor}>
          <label>
            Select style:
            <input type="radio" name="style" id="red" />
            <input type="radio" name="style" id="noir" />
            <input type="radio" name="style" id="gum" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <input type="color" name="divs-color" id="divs-color" /> */}
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
  setColor: PropTypes.func.isRequired
};

export default Menu;
