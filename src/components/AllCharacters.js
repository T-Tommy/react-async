import React, { PureComponent } from 'react';
import Characters from './Characters';
import getCharacters from '../services/rick-and-morty-api';

export default class AllCharacters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters().then(characters => this.setState({ characters }));
  }

  render() {
    return (
      <Characters { ...this.state } />
    );
  }
}
