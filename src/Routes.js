import { Route, Switch } from "react-router-dom";
import React from "react";
import { Home, Favorites } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
};

export default Routes;
