import React, { PureComponent } from 'react';
import addErrorBoundary from './addErrorBoundary';
import Select from './Select';
import AllCharacters from '../containers/AllCharacters';
const AllCharactersWithErrorBoundary = addErrorBoundary(AllCharacters);

export default class App extends PureComponent {
  state = {
    select: 'Character'
  }

  selectHandler = ({ target }) => this.setState({ select: target.value })

  render() {
    return (
      <>
        <Select selectHandler={ this.selectHandler } />
        <AllCharactersWithErrorBoundary />
      </>
    );
  }
}
