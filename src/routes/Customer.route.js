import React from "react";
import Nav from "../components/Nav";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Profile from "../pages/Profile";

const Customer = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default Customer;
