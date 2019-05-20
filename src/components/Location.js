import React from 'react';
import PropTypes from 'prop-types';

function Location({ name, type, dimension }) {
  return (
    <li>
      <h2>{ name }</h2>
      <p>Type: { type }</p>
      <p>Dimension: { dimension }</p>
    </li>
  );
}

Location.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  dimension: PropTypes.string
};

export default Location;
