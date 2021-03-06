// import React, { useEffect, useRef, useState } from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Score } from '../Score';
import './divs.css';

export const Divs = function Divs({
  handleCheckFire, divColor, backgroundColor, rotationSpeedDivRight, rotationSpeedDivLeft,
  hitScore,
  failScore
}) {
  const setSelectedColors = () => {
    const divRight = document.getElementById('divRight');
    const divLeft = document.getElementById('divLeft');
    const background = document.getElementById('divs-background');
    const vanishingPoint = document.getElementById('vanishingPoint');
    const menuLink = document.getElementById('menuLink');
    divRight.style.border = `0.25vmin solid ${divColor}`;
    divRight.style.boxShadow = `0 0 1vmin 1vmin ${divColor}`;
    divLeft.style.border = `0.25vmin solid ${divColor}`;
    divLeft.style.boxShadow = `0 0 1vmin 1vmin ${divColor}`;
    background.style.backgroundColor = backgroundColor;
    vanishingPoint.style.backgroundColor = divColor;
    vanishingPoint.style.boxShadow = `0 0 10vmin 10vmin ${divColor}`;
    menuLink.style.color = divColor;
    menuLink.style.boxShadow = `0 0 4vmin 2vmin ${divColor}`;
  };

  const setRotation = () => {
    const divRight = document.getElementById('divRight');
    const divLeft = document.getElementById('divLeft');
    divRight.style.animation = rotationSpeedDivRight;
    divLeft.style.animation = rotationSpeedDivLeft;
  };

  useEffect(() => {
    setSelectedColors();
  });
  useEffect(() => {
    setRotation();
  });

  const checkHit = (angle) => {
    let isHit = false;
    if (angle === 0 || angle === 90 || angle === -90) {
      isHit = true;
    }
    const divRight = document.getElementById('divRight');
    const divLeft = document.getElementById('divLeft');
    divRight.style.animationPlayState = 'paused';
    divRight.style.filter = 'invert(100%)';
    divLeft.style.animationPlayState = 'paused';
    divLeft.style.filter = 'invert(100%)';
    setTimeout(() => {
      divRight.style.animationPlayState = 'running';
      divRight.style.filter = 'invert(0%)';
      divLeft.style.animationPlayState = 'running';
      divLeft.style.filter = 'invert(0%)';
    }, 1000);
    return isHit;
  };

  const convertToAngle = (matrix) => {
    let values = matrix.split('(')[1];
    [values] = [values.split(')')[0]];
    values = values.split(',');
    const sin = values[1]; // 0.5
    return Math.round(Math.asin(sin) * (180 / Math.PI));
  };

  const handleClickFire = () => {
    const divRight = getComputedStyle(document.getElementById('divRight')).transform;
    const currentAngle = convertToAngle(divRight);
    handleCheckFire(checkHit(currentAngle));
  };

  const handleKeyFire = (e) => {
    e.preventDefault();
    const { key } = e;
    if (key === 'Enter' || key === ' ') {
      handleClickFire();
    }
  };

  const showLink = () => {
    const menu = document.getElementById('menuLink');
    menu.style.opacity = '1';
    setTimeout(() => {
      menu.style.opacity = '0';
    }, 2000);
  };

  return (
    <section
      className="rotation-div__box"
      id="divs-background"
    >
      <figure id="divRight" className="rotation-div__square" />
      <figure id="divLeft" className="rotation-div__square" />
      <figure id="vanishingPoint" className="rotation-div__vanishing-point" />
      <Score
        hitScore={hitScore}
        failScore={failScore}
      />
      <Link
        id="menuLink"
        className="rotation-div__menu-link"
        to="../menu"
      >
        MENU
      </Link>
      <button
        type="button"
        className="rotation-div__hit-panel"
        onClick={handleClickFire}
        onKeyDown={handleKeyFire}
        onMouseMove={showLink}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      >
        {' '}
      </button>
      <Link
        id="menuLink"
        className="rotation-div__menu-link"
        to="../menu"
      >
        MENU
      </Link>
    </section>
  );
};

Divs.propTypes = {
  handleCheckFire: PropTypes.func.isRequired,
  divColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  rotationSpeedDivRight: PropTypes.string.isRequired,
  rotationSpeedDivLeft: PropTypes.string.isRequired,
  hitScore: PropTypes.string.isRequired,
  failScore: PropTypes.string.isRequired
};

export default Divs;
