import React, { PureComponent } from 'react';
import addErrorBoundary from './ErrorBoundary';
import Select from './Select';
import Containers from '../containers/makeContainer';

const ContainersWithErrorBoundary = Containers.reduce((acc, cur) => ({ ...acc, [cur.displayName]: addErrorBoundary(cur) }), {});

export default class App extends PureComponent {
  state = {
    select: 'Character'
  }

  selectHandler = ({ target }) => this.setState({ select: target.value })

  render() {
    const Container = ContainersWithErrorBoundary[`All${this.state.select}s`];
    return (
      <>
        <Select selectHandler={this.selectHandler} />
        <Container />
      </>
    );
  }
}
