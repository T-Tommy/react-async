import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

function Locations({ locations }) {
  const characterList = locations.map(({ id, name, type, dimension }) => (
    <Location
      key={ id }
      name={ name }
      type={ type }
      dimension={ dimension }
    />
  ));

  return (
    <ul>
      { characterList }
    </ul>
  );
}

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object)
};

export default Locations;
