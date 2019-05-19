import React, { PureComponent } from 'react';
import Characters from './Characters';
import Paging from './Paging';
import getCharacters from '../services/rick-and-morty-api';

export default class AllCharacters extends PureComponent {
  state = {
    page: 1,
    totalPages: 0,
    characters: []
  }
  
  fetchCharacters = () => getCharacters(this.state.page).then(([totalPages, characters]) => this.setState({ totalPages, characters }));
  
  prevPage = () => this.setState(state => ({ page: state.page - 1 }));
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
        <Paging 
          prevPage={ this.prevPage } 
          nextPage={ this.nextPage } 
          page={ this.state.page } 
          totalPages={ this.state.totalPages }
        />
        <Characters { ...this.state } />
      </>
    );
  }
}
