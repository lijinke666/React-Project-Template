import React, { PureComponent } from 'react'
import { hot } from "react-hot-loader"
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'   //5.0 移除了 history 需要手动引入 history依赖
import { Home, Root, Test } from "libs/routes"
import history from "libs/history"


class App extends PureComponent {
    render() {
        return (
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" render={()=> <Redirect to="/" /> } component={Home} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </BrowserRouter>
            </ConnectedRouter>
        )
    }
}

export default hot(module)(App)


