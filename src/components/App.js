import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './Main';
import '../assets/sass/App.scss';
import { ProductsContextProvider } from '../contexts/ProductsContext';

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/items" component={Main} />
          <Route exact path="/items/:id" component={Main} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
