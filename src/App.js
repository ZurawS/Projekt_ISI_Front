import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/Navbar";
import newRecipe from "./components/recipes/NewRecipe";
import deleteRecipe from "./components/recipes/DeleteRecipe";
import SearchForm from "./components/navigation/SearchForm";
import UpdateFormula from "./components/recipes/UpdateRecipe";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={SearchForm} />
            <Route path="/addCourse" component={newRecipe} />
            (
            <Route path="/updateCourse" component={UpdateFormula} />
            ) (
            <Route path="/deleteCourse" component={deleteRecipe} />)
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;