import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AllCharacters from '../containers/AllCharacters';

function App() {
  return (
    <ErrorBoundary>
      <AllCharacters />
    </ErrorBoundary>
  );
}

export default App;
