import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if(this.state.error) {
      return <h3>Error!</h3>;
    }
    return this.props.children;
  }
}

export default function addErrorBoundary(Component) {
  return function ComponentWithErrorBoundary() {
    return (
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    );
  };
}
