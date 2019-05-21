import React from 'react';
import PropTypes from 'prop-types';

function Character({ result }) {
  const { name, image, status, species } = result;
  return (
    <li>
      <h2>{ name }</h2>
      <img src={ image } />
      <p>Status: { status }</p>
      <p>Species: { species }</p>
    </li>
  );
}

Character.propTypes = {
  result: PropTypes.object.isRequired
};

export default Character;
