import React from 'react';
import { Route } from 'react-router';

// default HOC
import DefaultHOC from './HOC/Default.HOC';

function App() {

  function Home() {
    return(
      <h1>home page</h1>
    );
  }

  function Movie() {
    return(
      <h1>Movie Page</h1>
    );
  }

  return (
    <>
      <DefaultHOC path="/" exact component={Home} />
      <Route path="/movie" exact component={Movie} />
    </>
  );
}

export default App;