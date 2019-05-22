import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default function makeList(Component) {
  return class List extends PureComponent {
    static propTypes = {
      results: PropTypes.array.isRequired
    }

    static displayName = `${Component.displayName}s`

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
