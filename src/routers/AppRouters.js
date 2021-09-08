import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Estudiantes from '../components/Estudiantes';

export default class AppRouters extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/Estudiantes" component={Estudiantes}></Route>
                    </Switch>
                    <Redirect to="/"/>
                </Router>
            </div>
        )
    }
}
