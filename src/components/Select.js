import React from 'react';
import PropTypes from 'prop-types';
import fields from '../services/selectFields';

export default function Select({ selectHandler }) {
  return (
    <select onChange={ selectHandler }>
      {
        fields.map(field => (
          <option key={ field } value={ field.displayName }>
            { field.displayName }
          </option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  selectHandler: PropTypes.func.isRequired
};
