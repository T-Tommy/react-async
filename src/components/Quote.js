import React from 'react';
import PropTypes from 'prop-types';

function Quote({ character, quote, image }) {
  return (
    <div>
      <p>{ character }</p>
      <img src={ image } />
      <p>{ quote }</p>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
  image: PropTypes.string
};

export default Quote;
