import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import ProductDetail from "../pages/product/product";

const MyRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`/detail/:id`} component={ProductDetail} />
    </Switch>
  );
};

export default MyRouter;
