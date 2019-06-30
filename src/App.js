import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import './theme/dist/css/style.css'

const browserHistory = createBrowserHistory();

export class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Routes />
            </Router>
        );
    }
}

export default App;
