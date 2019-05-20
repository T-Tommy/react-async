import React from 'react';  
import ErrorBoundary from './ErrorBoundary';

export default function addErrorBoundary(Component) {
  return function ComponentWithErrorBoundary() {
    return (
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    );
  };
}
