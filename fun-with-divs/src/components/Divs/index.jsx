import React from 'react';
import './divs.css';

export const Divs = function Divs() {
  return (
    <section className="rotation-div__box">
      <figure className="rotation-div__square" />
      <figure className="rotation-div__square" />
      <figure className="rotation-div__vanishing-point" />
    </section>
  );
};

export default Divs;
