import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Home page*/}
        <Route exact path="/">
          <Home />
        </Route>
        {/* About page page*/}
        <Route path="/about">
          <About />
        </Route>
        {/* cocktail page*/}
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        {/* Error page*/}
        <Route path="*">
          <Error />
        </Route>
        {/* end switch block*/}
      </Switch>
    </Router>
  );
}

export default App;
