import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import './divs.css';

export const Divs = function Divs({ handleChance }) {
  const divRight = useRef();

  const rotationHandler = () => {
    const rightRotationDegrees = divRight.current.transition.rotate;
    handleChance(rightRotationDegrees);
  };

  const getResult = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      rotationHandler();
    }
  };

  // document.addEventListener(onKeyPress = ' ', getResult());

  return (
    <section
      className="rotation-div__box"
      role="presentation"
      onKeyPress={getResult}
    >
      <figure ref={divRight} id="divRight" className="rotation-div__square" />
      <figure id="divLeft" className="rotation-div__square" />
      <figure className="rotation-div__vanishing-point" />
    </section>
  );
};

Divs.propTypes = {
  handleChance: PropTypes.func.isRequired
};

export default Divs;
