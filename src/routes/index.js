import React from "react";
import { Route, Switch } from "react-router-dom";
import Customer from "./Customer.route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Customer} />
    </Switch>
  );
};

export default Routes;
