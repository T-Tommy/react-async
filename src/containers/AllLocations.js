import React, { PureComponent } from 'react';
import Locations from '../components/Locations';
import Paging from '../components/Paging';
import Loading from '../components/Loading';
import { getLocations } from '../services/rick-and-morty-api';

export default class AllLocations extends PureComponent {
  state = {
    page: 1,
    totalPages: 1,
    locations: [],
    loading: true
  }

  fetchLocations = () => {
    this.setState({ loading: true });
    getLocations(this.state.page).then(([totalPages, locations]) => this.setState({ totalPages, locations, loading: false }));
  }

  updatePage = page => this.setState(() => ({ page }));

  componentDidMount() {
    this.fetchLocations();
  }

  componentDidUpdate(_, prevState) {
    if(this.state.page !== prevState.page) {
      this.fetchLocations();
    }
  }

  render() {
    const {
      locations,
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
        <Locations locations={ locations } />
      </>
    );
  }
}
