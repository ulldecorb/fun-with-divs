// import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import { PropTypes } from 'prop-types';
import './divs.css';

export const Divs = function Divs({ handleChance }) {
  // const divRight = useRef();
  // const [rotateDivDegree, setRotateDivDegree] = useState('rotate(0deg)');

  // const rotationHandler = () => {
  //   const rightRotationDegrees = divRight.style.transform;
  //   handleChance(rightRotationDegrees);
  // };

  // const getResult = (event) => {
  //   console.log(event.key);
  //   console.log(`event.key : ${event.key}`);
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     rotationHandler();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('onKeyPress', () => getResult);
  // }, []);

  const handleHitChance = () => {
    const divRight = getComputedStyle(document.getElementById('divRight')).transform;
    handleChance(divRight);
    console.log(divRight);
    // eslint-disable-next-line no-debugger
    // debugger;
  };

  return (
    <section
      className="rotation-div__box"
      role="presentation"
      onKeyPress={(e) => handleHitChance(e)}
    >
      <figure id="divRight" className="rotation-div__square" />
      <figure id="divLeft" className="rotation-div__square" />
      <figure className="rotation-div__vanishing-point" />
      <button
        type="button"
        className="rotation-div__hit-button"
        onClick={handleHitChance}
      >
        HIT
      </button>
    </section>
  );
};

Divs.propTypes = {
  handleChance: PropTypes.func.isRequired
};

export default Divs;
