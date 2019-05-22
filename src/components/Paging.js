import React from 'react';
import PropTypes from 'prop-types';

export default function Paging({ updatePage, page, totalPages }) {
  return (
    <nav>
      <button onClick={ () => updatePage(page - 1) } disabled={ 1 === page }>{ '<<' }</button>
      Page { page } of { totalPages }
      <button onClick={ () => updatePage(page + 1) } disabled={ totalPages === page }>{ '>>' }</button>
    </nav>
  );
}

Paging.propTypes = {
  updatePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
