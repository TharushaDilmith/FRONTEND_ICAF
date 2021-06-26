import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactUs from './pages/contactus';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <section>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/contact-us" component={ContactUs} />
                    </Switch>
                </section>
                {/* <Footer/> */}
            </Router>
        </div>
    )
}

export default App
