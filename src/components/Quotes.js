import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteList = quotes.map(({ character, quote, image }) => (
    <Quote key={ quote } character={ character } quote={ quote } image={ image } />
  ));
  
  return (
    <ul>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string
  }))
};

export default Quotes;
