import React from 'react';
import addErrorBoundary from './withErrorBoundary';
import AllCharacters from '../containers/AllCharacters';
const AllCharactersWithErrorBoundary = addErrorBoundary(AllCharacters);

function App() {
  return (
    <AllCharactersWithErrorBoundary />
  );
}

export default App;
