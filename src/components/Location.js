import React from 'react';
import PropTypes from 'prop-types';

function Location({ result }) {
  const { name, type, dimension } = result;
  return (
    <li>
      <h2>{ name }</h2>
      <p>Type: { type }</p>
      <p>Dimension: { dimension }</p>
    </li>
  );
}

Location.propTypes = {
  result: PropTypes.string.isRequired
};

export default Location;
