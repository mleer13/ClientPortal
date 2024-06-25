import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.scss";

// Simple navigation bar that will allow for the addition of further sections in the expansion of the application
// maps over the 'sections' array created in the App.js file
function Nav(props) {
    const {title, sections} = props;
    return(
        <React.Fragment>
            <Toolbar sx={{borderBottom: 4, borderColor: 'divider'}}>
                <Typography
                components="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1, fontFamily: 'default'  }}>
                   <Link to="/" data-testid="navTitle">{title}</Link> 
                </Typography>
            </Toolbar>
            <Toolbar
            component="nav"
            varient="dense"
            sx={{justifyContent: 'space-between', overflowX:'auto', fontFamily: 'default' }}>
                {sections.map((section) => (
                    <Link underline="none" to={section.url}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}



export default Nav;