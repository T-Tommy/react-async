import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map(({ id, name, status, species, image }) => (
    <Character
      key={ id }
      name={ name }
      status={ status }
      species={ species }
      image={ image }
    />
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default Characters;
