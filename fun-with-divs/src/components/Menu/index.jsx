import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './menu.css';

export const Menu = function Menu({ setColor }) {
  // const handleColor = (event) => {
  //   event.preventDefault();
  // };

  const [divColor, setDivColor] = useState('pink');
  const [backgroundColor, setBackgroundColor] = useState('#000');

  const handleDivColors = (color) => {
    setDivColor(color);
    setColor(divColor, backgroundColor);
  };

  const handleBackgroundColor = (color) => {
    setBackgroundColor(color);
    setColor(divColor, backgroundColor);
  };

  console.log('divColor', divColor);
  console.log('backgroundColor', backgroundColor);

  return (
    <section className="menu">
      <div className="menu__box">
        <input className="input input__div-color" type="color" value={divColor} onChange={(e) => handleDivColors(e.target.value)} />
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
        {/* <button type="button">RESET</button> */}
      </div>
    </section>
  );
};

Menu.propTypes = {
  setColor: PropTypes.func.isRequired
};

export default Menu;
