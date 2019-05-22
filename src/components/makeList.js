import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fields from '../services/selectFields';

function makeList(Component) {
  return class List extends PureComponent {
    static propTypes = {
      results: PropTypes.array.isRequired
    }

    displayName = `${Component.displayName}s`

    render() {
      const list = this.props.results.map(result => (
        <Component key={result.id} result={result} />
      ));

      return (
        <ul>
          {list}
        </ul>
      );
    }
  };
}

export default fields.map(field => makeList(field));
