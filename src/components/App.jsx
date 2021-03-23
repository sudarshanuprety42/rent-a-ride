import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import { PrivateRoute } from "./PrivateRoute";
import Profile from "./Profile";
import Reservation from "./Reservation";
import Login from "./user/Login";
import Register from "./user/Register";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/reservation" component={Reservation} />
      </Switch>
    </Router>
  );
}
