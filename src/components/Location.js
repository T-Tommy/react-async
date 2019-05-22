import React from 'react';
import PropTypes from 'prop-types';

export default function Location({ result }) {
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
  result: PropTypes.object.isRequired
};

Location.displayName = 'Location';
