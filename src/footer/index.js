import React from "react";
import { makeStyles } from "@mui/styles";
import priyanshu from "../images/priyanshu.jpeg";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        alignItems: "center",
    },
    img: {
        height: "80px",
        width: "80px",
        borderRadius: "50%",
        padding: "30px"
    },
    span_2: {
        color: "#4697ff",
        // paddingLeft: "960px"
        gap: "10px"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <img src={priyanshu} alt="priyanshu" className={classes.img} />
            <p style={{ paddingRight: "10px" }}>Footer</p>
            <span style={{ paddingLeft: "10px", boxShadow: "-1px 0px 0px 0px" }}>Copyright © 2023 Priyanshu.us</span>
        </div>
    )
}
export default Footer;