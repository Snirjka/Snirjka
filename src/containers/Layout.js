import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Layout = () => {
    return (
        <section className='layout'>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </section>
    );
}

export default Layout;