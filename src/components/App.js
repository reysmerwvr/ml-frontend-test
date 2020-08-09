import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './common/Header';
import ProductList from './ProductList';
import history from '../utils/history';
import '../assets/sass/App.scss';

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
