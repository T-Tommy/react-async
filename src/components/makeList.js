import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Location from './Location';

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

export default {
  Characters: makeList(Character),
  Locations: makeList(Location)
};
