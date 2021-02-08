import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import FetchData from './components/FetchData';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Toggle from './components/Toggle';


const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/toggle">
                        <Toggle />

                    </Route>
                    <Route path="/fetch-data">
                        <FetchData />
                    </Route>
                    <Route path="/">
                        <Form />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
