import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Main from "./Main"
import history from "../utils/history"
import "../assets/sass/App.scss"
import { ProductsContextProvider } from "../contexts/ProductsContext"

function App() {
  return (
    <ProductsContextProvider>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/items" component={Main} />
          <Route exact path="/items/:id" component={Main} />
        </Switch>
        <Footer />
      </Router>
    </ProductsContextProvider>
  )
}

export default App
