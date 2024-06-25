import React from "react";
import "../App.scss";

// About page that can be access by any authenticated or non-authenticated user
const About = () => {
    return(
        <section className="main" id="about">
            <div>
                <h1>About</h1>
                <p>
                The purpose of this web app is to manage, calculate and display employees payroll and scheduling activities. 
                Both employer and employee will be able to see the rostering schedules of the week, and total pay of the working week 
                and send documents to each other as needed. Hence, it makes it easier for the employer and employee to understand their 
                rosters and prevent miscommunication.
                <br></br>
                EasyPortal seeks to solve how these issues can impact smaller businesses, where these responsibilities often fall to 
                only one or two people and can be very time consuming. Owners or managers of these businesses need an easy-to-use system 
                to help reduce time tied up with administrative duties. Employees of these businesses can also benefit from more direct 
                communication and less confusing information about important factors such as rostered shifts and pays.
                </p>
            </div>
        </section>
    )
}

export default About