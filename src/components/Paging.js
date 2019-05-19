import React from 'react';
import PropTypes from 'prop-types';

function Paging({ prevPage, nextPage, page, totalPages }) {
  return (
    <nav>
      <button onClick={ prevPage } disabled={ 1 === page }>{ '<<' }</button>
      Page { page } of { totalPages }
      <button onClick={ nextPage } disabled={ totalPages === page }>{ '>>' }</button>
    </nav>
  );
}

Paging.propTypes = {
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
