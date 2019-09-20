import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { waitingRouteComponent } from '../commons/utils';

const Home = lazy(() => import('./home'));

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <Redirect to="/react-redux-app" />
            )}
        />
        <Route path="/" exact component={waitingRouteComponent(Home)} />
    </Switch>
);

export default Routes;
