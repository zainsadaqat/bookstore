import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
