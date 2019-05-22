import React from 'react';
import PropTypes from 'prop-types';

export default function Location({ result }) {
  const { name, episode, air_date } = result;
  return (
    <li>
      <h2>{name}</h2>
      <p>{episode}</p>
      <p>Aired on {air_date}</p>
    </li>
  );
}

Location.propTypes = {
  result: PropTypes.object.isRequired
};

Location.displayName = 'Episode';
