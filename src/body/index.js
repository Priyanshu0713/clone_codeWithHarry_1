import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import photo from "../images/photo.jpg";

const useStyles = makeStyles((theme) => ({
    container: {
        fontVariant: "all-petite-caps",
        display: "flex",
        gridGap: "0px 110px",
        maxWidth: "1470px"
    },
    container_1: {
        minWidth: "540px",
        padding: "0px 60px",
        fontSize: "larger",
        "& > a": {
            padding: "4px"
        },
        "& > p": {
            maxWidth: "830px",
            color: "#6B7280"
        },
        "@media screen and (max-width:1014px)": {
            textAlign: "center"
        }
    },
    container_2: {
        clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)",
        "@media screen and (max-width:1014px)": {
            display: "none"
        }
    },
    image: {
        height: "400px",
        width: "700px",
    },
    redText: {
        color: "#7E22CE",
    },
}));

function Body() {
    const classes = useStyles();

    const headings = ["Machine Learning", "Java", "Data science", "HTML", "CSS", "JavaScript", "C", "C++", "Python", "PHP", "React JS"];
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 1200);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    const [showHomepage, setShowHomepage] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowHomepage(true);
        }, 1500);
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.container_1}>
                <h1>Welcome to {showHomepage && <span style={{ color: "#7E22CE" }}>HomePage</span>}</h1>
                <h2>Learn <span className={classes.redText}>{headings[currentHeadingIndex]}</span></h2>
                <p>
                    Confused on which course to take?
                    I have got you covered. Browse courses
                    and find out the best course for you.
                    It's free! Code With Harry is my
                    attempt to teach basics and those
                    coding techniques to people in a short
                    time which took me ages to learn.
                </p>
                <a href="/">
                    <Button variant="contained" style={{ borderRadius: "5px", backgroundColor: "black" }}>Free Courses</Button>
                </a>
                <a></a>
                <a href="/">
                    <Button variant="contained" style={{ borderRadius: "5px", backgroundColor: "#503939" }}>Explore Blog</Button>
                </a>
            </div>
            <div className={classes.container_2}>
                <img src={photo} alt="React" className={classes.image} />
            </div>
        </div>
    );
}

export default Body;
