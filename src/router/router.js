import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/index";
import ProductDetail from "../product/index";

const MyRouter = () => {
  const Component1 = () => <Home />;
  const Component2 = props => (
    <ProductDetail
      title={props.location.aboutProps["title"]}
      img={props.location.aboutProps["img"]}
      price={props.location.aboutProps["price"]}
    />
  );

  return (
    <Switch>
      <Route exact path="/" component={Component1} />
      <Route path={`/detail/:data`} component={Component2} />
    </Switch>
  );
};

export default MyRouter;
