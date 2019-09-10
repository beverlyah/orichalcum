import React from 'react';
// glyph references to what needs to be rendered.

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);

export default Arrow;