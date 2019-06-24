import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/index";
import ProductDetail from "../product/index";

const MyRouter = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`/detail/:id`} component={ProductDetail} />
    </Switch>
  );
};

export default MyRouter;
