import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        fontVariant: "all-petite-caps",
        display: "flex",
        alignItems: "center",
        height: "40px",
        padding: "0px 20px",
        "& > ul li:nth-child(n+1):nth-child(-n+9)": {
            "@media screen and (max-width:1014px)": {
                display: "none",
            },
        },
        "& > ul": {
            display: "flex",
            gap: "30px",
            padding: "5px 210px"
        },
        "& > ul > li:nth-child(1)": {
            marginLeft: "190px"
        },
        "& > ul > li": {
            listStyle: "none",
            "& :hover": {
                textDecoration: "underline"
            }
        },
        "& > ul > li > a": {
            textDecoration: "none",
            listStyle: "none",
            fontWeight: 600,
            color: "#7E22CE",
        }
    },
    Icon: {
        color: "#7E22CE",
        paddingLeft: "40px",
        padding: "5px"
    },
}));

function MyComponent() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <HomeIcon className={classes.Icon} />
            <ul>
                <li><a href="/">HTML</a></li>
                <li><a href="/">CSS</a></li>
                <li><a href="/">JS</a></li>
                <li><a href="/">C</a></li>
                <li><a href="/">C++</a></li>
                <li><a href="/">JAVA</a></li>
                <li><a href="/">PYTHON</a></li>
                <li><a href="/">PHP</a></li>
                <li><a href="/">REACT.JS</a></li>
            </ul>
        </div>
    );
}

export default MyComponent;
