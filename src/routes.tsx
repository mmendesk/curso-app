import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { NewModal } from "../src/components/Modal/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/student" component={NewModal} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
