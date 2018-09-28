import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux"; //5.0 移除了 history 需要手动引入 history依赖
import { Home, TestPage } from "libs/routes";
import NotFound from "app/components/NotFound";
import history from "libs/history";

import "./styles.less";

class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/home"
            render={() => <Redirect to="/" />}
            component={Home}
          />
          <Route path="/testPage" component={TestPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(App);
