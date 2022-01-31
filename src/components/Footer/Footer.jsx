import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./footerStyles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h6" >
                Made by&nbsp;
                <a href="https://github.com/CosyCute" rel="noreferrer" target="_blank" style={{color: '#fff'}} className={classes.navLink}>
                    Fedorov Roman
                </a>
            </Typography>
        </footer>
    );
};

export default Footer;
