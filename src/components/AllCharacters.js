import React, { PureComponent } from 'react';
import Characters from './Characters';
import getCharacters from '../services/rick-and-morty-api';

export default class AllCharacters extends PureComponent {
  state = {
    page: 1,
    characters: []
  }
  
  fetchCharacters = () => getCharacters(this.state.page).then(characters => this.setState({ characters }));
  
  nextPage = () => this.setState(state => ({ page: state.page + 1 }));
  
  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(_, prevState) {
    if(this.state.page !== prevState.page) {
      this.fetchCharacters();
    }
  }


  render() {
    return (
      <>
        <button onClick={this.nextPage}>Next Page</button>
        <Characters { ...this.state } />
      </>
    );
  }
}
