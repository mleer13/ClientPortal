import React from "react";
import { Box, Container, Typography } from "@mui/material";

// Simple footer element to show the copyright and a message reminder to regularly check rosters
function Copyright() {
    return (
        <Typography variant="body2" color={"black"} align="center">
            {"Copyright © EasyPortal"}
            {new Date().getFullYear()}
        </Typography>
    )
}

const Footer = (props) => {
    return (
        <Box sx={{bgcolor: '#fc8403', py:5 }}>
            <Container maxWidth="lg">
                <Typography varient="h4" align="center" gutterBottom>
                    {props.title}
                </Typography>
                <Typography varient="subtitle1" align="center" color={"#03a5fc"}>
                    {props.subtitle}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer