import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        textAlign: "center",
        width: "1500px",
        "@media screen and (max-width:1014px)": {
            width: "auto"
        },
        "@media screen and (max-width:767px)": {
            width: "650px"
        },
    },
    Testimonials: {
        display: "flex",
        gap: 60,
        padding: "30px",
        width: "1450px",
        "@media screen and (max-width:1014px)": {
            display: "grid",
            width: "fit-content"
        },
        "& > div": {
            padding: "20px 40px",
            backgroundColor: "#efefef",
            borderRadius: "5px",
            fontVariant: "all-petite-caps",
            "@media screen and (max-width:767px)": {
                width: "500px"
            },
        },
    }
}));

function Testimonials() {
    const classes = useStyles();
    return (
        <><div >
            <div className={classes.main}>
                <h1 style={{ fontVariant: "all-petite-caps", }}>Testimonials</h1>
            </div>
            <div className={classes.Testimonials}>
                <div className={classes.Testimonial_1}>
                    <span style={{ fontSize: "xxx-large" }}>"</span>
                    <p>I don't have words to thank this man, I'm really
                        grateful to have this channel and website in my daily
                        routine. If you're a mere beginner, then you can trust
                        this guy and can put your time into his content.
                        I can assure you that it'll be worth it.
                    </p>
                    <span style={{ fontWeight: "bold" }}>Mohit Kumar<br />
                    </span>Web Developer
                </div>
                <div className={classes.Testimonial_2}>
                    <span style={{ fontSize: "xxx-large" }}>"</span>
                    <p>
                        For everyone who wants to level up their
                        #Coding and #Dev skills - seriously, this
                        channel is for you! Both basic and advanced stacks are
                        covered on this channel, and one can learn according to
                        his skill levels. And the icing on the cake is,
                        everything is available for free.
                    </p>
                    <span style={{ fontWeight: "bold" }}>Rakesh Shetty<br />
                    </span>Web Developer
                </div>
            </div>
        </div>
        </>
    )
}
export default Testimonials;