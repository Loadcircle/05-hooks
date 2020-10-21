import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import {AboutScreen} from './AboutScreen'
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/login" component={LoginScreen} />

                    {/* Ultima ruta para definir como 404 o un default; en este caso un redirect */}                    
                    <Redirect to="./" />
                </Switch>
                </div>
                
            </div>
        </Router>
    )
}
