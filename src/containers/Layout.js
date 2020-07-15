import React, { useState } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Loading from '../components/Loading';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {
                isLoading
                    ?
                    <Loading onLoad={() => setIsLoading(false)} />
                    :
                    <section className='layout'>

                        <Header />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                        </Switch>
                    </section>
            }

        </>
    );
}

export default Layout;