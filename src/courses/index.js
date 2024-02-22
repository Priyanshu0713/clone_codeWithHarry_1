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
        placeContent: "center",
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
            height: "200px",
            width: "1000px",
            "&>p": {
                fontSize: "18px",
            },
            "@media screen and (max-width:1013px)": {
                width: "500px",
            },
            "&:hover": {
                boxShadow: "0px 0px 20px 2px rgb(192 57 57)"
            },

        },
    },
    card_1: {
        backgroundColor: "#cba3a3",
    },
    card_2: {
        backgroundColor: "#adccb0",
    },
    card_3: {
        backgroundColor: "#e3eec7",
    },
    card_4: {
        backgroundColor: "#e5c78a",
    },
    card_5: {
        backgroundColor: "#4cabf8",
    },
    card_6: {
        backgroundColor: "#81c592",
    },
    card_7: {
        backgroundColor: "#b481db",
    },
    card_8: {
        backgroundColor: "#75fe8987",
    },
    card_9: {
        backgroundColor: "#00000063",
    },
}));
function Courses() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.main_div}>
                <div className={classes.main}>
                    <h1 style={{ fontVariant: "all-petite-caps", }}>Recommended Languages</h1>
                </div>
                {/* <div className={classes.card}>
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
                </div> */}

                <div className={classes.card}>
                    <div className={classes.card_1}>
                        <h3>HTML</h3>
                        <p>The language for building web pages</p>
                        <a href="/HTML"><Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn HTML</Button>
                        </a></div>
                    <div className={classes.card_2}>
                        <h3>CSS</h3>
                        <p>The language for styling web pages</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn CSS</Button>
                    </div>
                    <div className={classes.card_3}>
                        <h3>JAVASCRIPT</h3>
                        <p>The language for programming web pages</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn JAVASCRIPT</Button>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_4}>
                        <h3>C</h3>
                        <p>A general-purpose programming language</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn C</Button>
                    </div>
                    <div className={classes.card_5}>
                        <h3>C++</h3>
                        <p>A programming language</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn C++</Button>
                    </div>
                    <div className={classes.card_6}>
                        <h3>JAVA</h3>
                        <p>A programming language</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn JAVA</Button>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_7}>
                        <h3>PYTHON</h3>
                        <p>A popular programming language</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn PYTHON</Button>
                    </div>
                    <div className={classes.card_8}>
                        <h3>PHP</h3>
                        <p>A web server programming language</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn PHP</Button>
                    </div>
                    <div className={classes.card_9}>
                        <h3>REACT</h3>
                        <p>A JavaScript library for building user interfaces.</p>
                        <Button variant="contained" style={{ backgroundColor: "#005c5c", borderRadius: "50px" }}>Learn REACT</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Courses;