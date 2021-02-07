import React from 'react';
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import FetchData from './components/FetchData';
import Form from './components/Form';
import Toggle from './components/Toggle';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <nav >
                        <ul style={{ display: 'flex', listStyleType: 'none' }}>
                            <li style={{ paddingRight: '1rem' }} >
                                <Link to="/">Form</Link>
                            </li>
                            <li style={{ paddingRight: '1rem' }}>
                                <Link to="/toggle">Toggle</Link>
                            </li>
                            <li style={{ paddingRight: '1rem' }}>
                                <Link to="/fetch-data">Fetch Data</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
                </div>
            </Router>
        </div>
    )
}

export default App
