import React from 'react';
import './divs.css';

export const Divs = function Divs() {
  // const replicateDiv = () => {
  //   const divRight = document.getElementById('divRight');
  //   console.log(`divRight: id = ${divRight.id}`);
  //   for (let i = 0; i < 10; i + 1) {
  //     const divChild = divRight.cloneNode();
  //     console.log(44);
  //     divChild.id = `divRight${i}`;
  //     if (divChild.id === 'divRight0') {
  //       divRight.appendChild(divChild);
  //     } else {
  //       document.getElementById(`divRight${i - 1}`).appendChild(divChild);
  //     }
  //   }
  // };

  // replicateDiv();

  return (
    <section className="rotation-div__box">
      <figure id="divRight" className="rotation-div__square" />
      <figure id="divLeft" className="rotation-div__square" />
      <figure className="rotation-div__vanishing-point" />
    </section>
  );
};

export default Divs;
