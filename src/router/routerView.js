<<<<<<< HEAD
import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
export default class routerView extends Component {
=======
import * as React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
export default class RouterView extends React.Component{
>>>>>>> master
  constructor(props) {
    super(props);
  }
  render() {
    let { routes } = this.props;
<<<<<<< HEAD
    let routerArr = routes.filter(item => !item.redirect);
    let redirectArr = routes.filter(item => item.redirect);
    return (
      <Switch>
        {routerArr.map((item, index) => (
=======
    console.log(routes,"view")
    let routerArr = routes?routes.filter(item => !item.redirect):"";
    let redirectArr =  routes?routes.filter(item => item.redirect):"";
    return (
      <Switch>
        {routerArr?routerArr.map((item, index) => (
>>>>>>> master
          <Route
            path={item.path}
            key={index}
            render={props => {
              return (
                <item.component
                  {...props}
                  routes={item.children}
                ></item.component>
              );
            }}
          ></Route>
<<<<<<< HEAD
        ))}
        {redirectArr.map((item, index) => (
          <Redirect from={item.path} key={index} to={item.redirect}></Redirect>
        ))}
=======
        )):""}
        {redirectArr?redirectArr.map((item, index) => (
          <Redirect from={item.path} key={index} to={item.redirect}></Redirect>
        )):""}
>>>>>>> master
      </Switch>
    );
  }
}
