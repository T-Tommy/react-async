import React, { PureComponent } from 'react';
import addErrorBoundary from './addErrorBoundary';
import Select from './Select';
import AllCharacters from '../containers/AllCharacters';
import AllLocations from '../containers/AllLocations';
const AllCharactersWithErrorBoundary = addErrorBoundary(AllCharacters);
const AllLocationsWithErrorBoundary = addErrorBoundary(AllLocations);

export default class App extends PureComponent {
  state = {
    select: 'Character'
  }

  selectHandler = ({ target }) => this.setState({ select: target.value })

  render() {
    return (
      <>
        <Select selectHandler={ this.selectHandler } />
        { this.state.select === 'Character' && <AllCharactersWithErrorBoundary />}
        { this.state.select === 'Location' && <AllLocationsWithErrorBoundary />}
      </>
    );
  }
}
