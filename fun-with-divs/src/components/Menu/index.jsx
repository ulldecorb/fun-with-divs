import React from 'react';
import './menu.css';

export const Menu = function Menu() {
  const handleColor = (event) => {
    event.preventDefault();
  };

  return (
    <section className="menu">
      <div className="menu__box">
        <input type="range" name="rotation-speed" id="rotation-speed" max="10" min="2" />
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
        <button type="button">RESET</button>
      </div>
    </section>
  );
};

export default Menu;
