import React, { PureComponent } from 'react';
import Lists from '../components/makeList';
import Paging from '../components/Paging';
import Loading from '../components/Loading';
import fetchApi from '../services/rick-and-morty-api';

const { Characters } = Lists;

export default class AllCharacters extends PureComponent {
  state = {
    page: 1,
    totalPages: 1,
    results: [],
    loading: true
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    fetchApi.characters(this.state.page).then(([totalPages, results]) => this.setState({ totalPages, results, loading: false }));
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
      results,
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
        <Characters results={ results } />
      </>
    );
  }
}
