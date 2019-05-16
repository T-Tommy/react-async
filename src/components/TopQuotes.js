import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from './Quotes';
import getQuotes from '../services/futurama-api';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  state = {
    quotes: []
  }
  
  fetchQuotes = () => getQuotes(this.props.count)
    .then(quotes => this.setState({ quotes }));
  
  render() {
    return (
      <>
        <button onClick={ this.fetchQuotes }>Top Quotes</button>
        <Quotes quotes={ this.state.quotes } />
      </>
    );
  }
}
