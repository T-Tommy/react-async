import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import Paging from '../components/Paging';
import Loading from '../components/Loading';
import getCharacters from '../services/rick-and-morty-api';

export default class AllCharacters extends PureComponent {
  state = {
    page: 1,
    totalPages: 1,
    characters: [],
    loading: true
  }
  
  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters(this.state.page).then(([totalPages, characters]) => this.setState({ totalPages, characters, loading: false }));
  }
  
  updatePage = page => this.setState(() => ({ page }));
  
  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(_, prevState) {
    if(this.state.page !== prevState.page) {
      this.fetchCharacters();
    }
  }

  render() {
    const {
      characters,
      page,
      totalPages,
      loading
    } = this.state;

    if(loading) return <Loading />;

    return (
      <>
        <Paging 
          updatePage={ this.updatePage } 
          page={ page } 
          totalPages={ totalPages }
        />
        <Characters characters={ characters } />
      </>
    );
  }
}
