import React from 'react';
import './menu.css';

export const Menu = function Menu() {
  return (
    <section className="menu">
      <div className="menu__box">
        <input type="range" name="rotation-speed" id="rotation-speed" max="10" min="2" />
        <input type="color" name="divs-color" id="divs-color" />
        <button type="button">RESET</button>
      </div>
    </section>
  );
};

export default Menu;
