import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar/'
import Entry from './Pages/Entry/'
import About from './Pages/About/'
import Projects from './Pages/Projects/'
import Contact from './Pages/Contact/'

export default class App extends Component {
    render() {
        return (
            <div id='main'>
                <Navbar />
                <div className='wrapper'>
                    <Switch>
                        <Route exact path='/' component={Entry} />
                        <Route path='/About' component={About} />
                        <Route path='/Projects' component={Projects} />
                        <Route path='/Contact' component={Contact} />
                    </Switch>
                </div>
            </div>
        );
    }
}