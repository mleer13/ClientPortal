import React from 'react';
import { Link } from "react-router-dom";
import "../App.scss";

// Simple not found page for when the url does match an available option
// Also be used for when non-authenticated users try to view areas of the site they shouldn't,
// they will instead get this message prompting them to sign in
const NotFound = () => {
    return(
        <div className="main" data-testid="notFound">
            <h1>404 Page Note Found</h1>
            <h4>Try /about to see what EasyPortal is all about!</h4>
            <Link to="/login"><h5>Or log in to your account here</h5></Link>
        </div>
    )
}

export default NotFound;