// import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import { PropTypes } from 'prop-types';
import './divs.css';

export const Divs = function Divs({ handleCheckFire }) {
  // const divRight = useRef();
  // const [rotateDivDegree, setRotateDivDegree] = useState('rotate(0deg)');

  // const rotationHandler = () => {
  //   const rightRotationDegrees = divRight.style.transform;
  //   handleCheckFire(rightRotationDegrees);
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

  const checkHit = (angle) => {
    let isHit = false;
    if (angle === 0 || angle === 90 || angle === -90) {
      isHit = true;
    }
    return isHit;
  };

  const convertToAngle = (matrix) => {
    let values = matrix.split('(')[1];
    [values] = [values.split(')')[0]];
    values = values.split(',');

    const sin = values[1]; // 0.5

    return Math.round(Math.asin(sin) * (180 / Math.PI));
  };

  const handleFire = () => {
    const divRight = getComputedStyle(document.getElementById('divRight')).transform;
    const currentAngle = convertToAngle(divRight);
    handleCheckFire(checkHit(currentAngle));
  };

  return (
    <section
      className="rotation-div__box"
      role="presentation"
      onKeyPress={(e) => handleFire(e)}
    >
      <figure id="divRight" className="rotation-div__square" />
      <figure id="divLeft" className="rotation-div__square" />
      <figure className="rotation-div__vanishing-point" />
      <button
        type="button"
        className="rotation-div__hit-button"
        onClick={handleFire}
      >
        HIT
      </button>
    </section>
  );
};

Divs.propTypes = {
  handleCheckFire: PropTypes.func.isRequired
};

export default Divs;
