import React from 'react';
import PropTypes from 'prop-types';

export default function makeList(Component) {
  function List({ results }) {
    const list = results.map(result => (
      <Component key={result.id} result={result} />
    ));

    return (
      <ul>
        {list}
      </ul>
    );
  }

  List.propTypes = { results: PropTypes.array.isRequired };
  List.displayName = `${Component.displayName}s`;
  
  return List;
}
