import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, image }) {
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
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string
};

export default Character;
