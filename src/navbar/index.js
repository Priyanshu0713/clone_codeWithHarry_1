import React, { useState } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    main_div: {
        fontVariant: "all-petite-caps",
        "& >ul": {
            display: "flex",
            listStyle: "none",
            // padding: "0px 60px",
            gap: "20px"
        },
        "& > ul > li": {
            // margin: "auto 12px",
            "& :hover": {
                textDecoration: "underline",
                textUnderlinePosition: "under",
                textDecorationColor: "#7E22CE"
            },
        },
        "& > ul > li > a": {
            textDecoration: "none",
            color: "black",
            whiteSpace: "nowrap"
        },
        "& > ul > li:nth-child(1) > a": {
            // marginRight: "450px",
            textDecoration: "none",
            color: "#7E22CE",
            fontWeight: "bold",
            fontSize: "25px",
            "@media screen and (max-width:600px)": {
                marginRight: "260px"
            }
        },
        "& > ul > li:nth-child(2)": {
            marginLeft: "450px",
        },
        "& > ul li:nth-child(n+2):nth-child(-n+11)": {
            "@media screen and (max-width:1014px)": {
                display: "none",
            }
        },
        "& > ul > li:nth-child(12)": {
            display: "none",
            "@media screen and (max-width:1014px)": {
                display: "block",
                marginLeft: "auto",
                marginRight: "110px"
            }
        }
    },
}));
function Navbar() {
    const classes = useStyles();
    const [isToggled, setIsToggled] = useState(false);
    const toggleElements = () => {
        setIsToggled(!isToggled);
    };
    return (
        <>
            <div className={classes.main_div}>
                <ul>
                    <li><a href="/">{"</>"}HomePage</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Courses</a></li>
                    <li><a href="/">Tutorial</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Notes</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">My Gear</a></li>
                    <li><a href="/">Work With Us</a></li>
                    <li><a href="/"><Button variant="contained" style={{ backgroundColor: "#7E22CE", color: "white", borderRadius: "10px" }}>Login</Button></a></li>
                    <li><a href="/"><Button variant="contained" style={{ backgroundColor: "#7E22CE", color: "white", borderRadius: "10px" }}>Signup</Button></a></li>
                    <li><a href="#"><Button variant="contained" style={{
                        backgroundColor: "#7E22CE", color: "white", borderRadius: "10px",
                        listStyleType: "disclosure-open"
                    }} /*onClick={toggleElements}*/>menu</Button></a></li>
                    {isToggled && (
                        <ol>
                            <li>elements</li>
                            <li>Home</li>
                            <li>search</li>
                        </ol>
                    )}
                </ul>
            </div >
        </>
    )
}
export default Navbar;