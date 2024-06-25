import React from "react";
import "../App.scss";

// This will provide the simple homepage and act as a landing page for the site
// An image of a portal, along with the message prompting users to log in will be visible

const Home = () => {
    return (
        <section id="home" className="ep">
            <div>
                <h1>Log in to enter the portal...</h1>
                <img src="../images/entertheportal.jpg" alt="door opening" height={600} width="100%"></img>
            </div>
        </section>
    )
}

export default Home;