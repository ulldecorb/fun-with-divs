import React from 'react';
import { PropTypes } from 'prop-types';
import './score.css';

export const Score = function Score({ hitScore, failScore }) {
  return (
    <section className="score">
      <div className="score__hits">{hitScore}</div>
      <div className="score__fails">{failScore}</div>
    </section>
  );
};

Score.propTypes = {
  hitScore: PropTypes.string.isRequired,
  failScore: PropTypes.string.isRequired
};

export default Score;
