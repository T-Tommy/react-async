import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fields from '../services/selectFields';

function makeList(Component) {
  return class List extends PureComponent {
    static propTypes = {
      results: PropTypes.object.isRequired
    }
    render() {
      const list = this.props.results.map(result => (
        <Component key={ result.id } result={ result } />
      ));

      return (
        <ul>
          { list }
        </ul>
      );
    }
  };
}

export default Object.keys(fields).reduce((acc, cur) => ({ ...acc, [`${cur}s`]: makeList(fields[cur]) }), {});
