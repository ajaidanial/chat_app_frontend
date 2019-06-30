import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/chat"
                />
                <Route
                    component={Chat}
                    exact
                    path="/chat"
                />
                <Route
                    component={SignIn}
                    exact
                    path="/sign-in"
                />
                <Route
                    component={SignUp}
                    exact
                    path="/sign-up"
                />
                <Route
                    component={ForgotPassword}
                    exact
                    path="/forgot-password"
                />
                <Route
                    component={NotFound}
                    exact
                    path="/not-found"
                />
                <Redirect to="/not-found" />
            </Switch>
        );
    }
}