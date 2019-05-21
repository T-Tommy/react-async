import React from 'react';
import PropTypes from 'prop-types';
import fields from '../services/selectFields';

function Select({ selectHandler }) {
  return (
    <select onChange={ selectHandler }>
      {
        Object.keys(fields).map(field => (
          <option key={ field } value={ field }>
            { field }
          </option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  selectHandler: PropTypes.func.isRequired
};

export default Select;
