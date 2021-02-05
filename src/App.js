import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./page/shopPage";
import BookPage from "./page/BookPage";
import MoviePage from "./page/moviePage";
import API4 from "./page/API4";
import API5 from "./page/API5";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ShopPage}/>
        <Route exact path="/book" component={BookPage}/>
        <Route exact path="/movie" component={MoviePage}/>
        <Route exact path="/api4" component={API4}/>
        <Route exact path="/api5" component={API5}/>
      </Switch>
    </div>
  );
}

export default App;
