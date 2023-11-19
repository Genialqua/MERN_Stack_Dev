import React, {Fragment} from "react";
import { Link } from "react-router-dom";


const Layout = ({children}) => {
    const nav = () => (
        <ul className="nav nav-tabs bg-black">
            <li className="nav-item">
                <Link to="/" className="text-light nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/signup" className="text-light nav-link">
                    Signup
                </Link>
            </li>
        </ul>
    )
    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

/* This would enable us to import this layout in
 * in other pages
 */
export default Layout;