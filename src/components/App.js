import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AllCharacters from './AllCharacters';

function App() {
  return (
    <ErrorBoundary>
      <AllCharacters />
    </ErrorBoundary>
  );
}

export default App;
