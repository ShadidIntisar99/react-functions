import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav >
                <ul style={{
                    display: 'flex', listStyleType: 'none', position: 'relative',
                    height: '100px',
                    width: '100%'

                }}>
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
        </div>
    )
}

export default Header
