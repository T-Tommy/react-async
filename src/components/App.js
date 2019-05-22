import React, { PureComponent } from 'react';
import Select from './Select';
import Containers from './pipeline';

export default class App extends PureComponent {
  state = {
    select: 'Character'
  }

  selectHandler = ({ target }) => this.setState({ select: target.value })

  render() {
    const Container = Containers[`All${this.state.select}s`];
    return (
      <>
        <Select selectHandler={this.selectHandler} />
        <Container />
      </>
    );
  }
}
