import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/home/home-container';
import Results from '../pages/results/results-container';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/results" component={Results}/>
            </Switch>
        );
    }
}