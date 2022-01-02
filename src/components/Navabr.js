import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
export const Navabr = () => {
    return (
        <Fragment>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/"><i class="fas fa-code"></i> DevConnect - Bhairab</Link>
                </h1>
                <ul>
                    <li><Link to="/">Developers</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">register</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}
