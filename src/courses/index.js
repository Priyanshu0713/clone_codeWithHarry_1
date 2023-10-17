import React from "react";
import { makeStyles } from "@mui/styles";
import python from "../images/python.jpg";
import javaScript from "../images/javaScript.jpg";
import React_1 from "../images/React_1.png";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    main_div: {
        minWidth: "650px"
    },
    main: {
        fontVariant: "all-petite-caps",
        textAlign: "center",
        "& >h1": {
            width: "1500px",
            "@media screen and (max-width:1013px)": {
                width: "auto"
            },
        },
    },
    card: {
        fontVariant: "all-petite-caps",
        display: "flex",
        minWidth: "1430px",
        maxWidth: "1420px",
        textAlign: "center",
        gap: "120px",
        padding: "40px",
        "@media screen and (max-width:1013px)": {
            display: "grid",
            justifyItems: "center",
            minWidth: "auto",
        },
        "&>div": {
            boxShadow: "0px 0px 10px 0px",
            borderRadius: "10px",
            height: "470px",
            "@media screen and (max-width:1013px)": {
                width: "min-content",
            },
        },
    },
    image: {
        width: "400px",
        borderRadius: "10px 10px 0px 0px"
    }
}));
function Courses() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.main_div}>
                <div className={classes.main}>
                    <h1 style={{ fontVariant: "all-petite-caps", }}>Recommended Courses</h1>
                </div>
                <div className={classes.card}>
                    <div>
                        <img src={python} alt="python" className={classes.image} />
                        <br />
                        FREE COURSE
                        <h3>Python Tutorials - 100 Days of Code</h3>
                        <p>Python is one of the most demanded programming
                            languages in the job market. Surprisingly, it is
                            equally easy to learn and master Python.
                            Let's commit our 100 days of code to python!</p>
                        <Button variant="contained" style={{ backgroundColor: "#6737a2", borderRadius: "50px" }}>Start Watching</Button>
                    </div>
                    <div>
                        <img src={javaScript} alt="python" className={classes.image} />
                        <br />
                        FREE COURSE
                        <h3>Ultimate JavaScript Course</h3>
                        <p>This latest JavaScript course comes with premium
                            curriculum that covers everything from basics
                            to advance. On top of that, you will get my
                            handwritten notes of JS for completely free.
                        </p>
                        <Button variant="contained" style={{ backgroundColor: "#6737a2", borderRadius: "50px" }}>Start Watching</Button>
                    </div>
                    <div>
                        <img src={React_1} alt="python" className={classes.image} />
                        <br />
                        FREE COURSE
                        <h3>React JS Tutorials For Beginners</h3>
                        <p>React is a free and open-source front-end
                            JavaScript library. This series will cover
                            React from starting to the end.
                            We will learn react from the ground up!
                            What are you waiting for? Just Enroll Buddy
                        </p>
                        <Button variant="contained" style={{ backgroundColor: "#6737a2", borderRadius: "50px" }}>Start Watching</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Courses;