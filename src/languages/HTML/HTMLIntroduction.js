import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../../header/index";
import harry_html from "../../images/harry_html.png";
import Footer from "../../footer";
import HTML from "./HTML";
import Navbar from "../../navbar/index";

const useStyles = makeStyles((theme) => ({
    slider: {

        "&>h1": {
            "@media screen and (max-width:1014px)": {
                margin: "20px 110px",
            }
        },
        "&>p": {
            fontFamily: "system-ui",
            margin: "10px 68px",
            backgroundColor: "#E7E9EB",
            borderRadius: "10px",
            padding: "22px 20px",
            minWidth: "970px",
            "@media screen and (max-width:1014px)": {
                minWidth: "600px",
                margin: "10px 110px"
            },
        }
    },
    main: {
        display: 'flex',
        // gap: "60px",
        margin: "0px 40px",
        "@media screen and (max-width:1014px)": {
            display: 'flex',
            gap: "0px",
            margin: "0px -35px",
        }
    },
    description: {
        color: "#8400ff",
        fontWeight: 500,
        minWidth: "22%",
        "&>h1": {
            fontFamily: "cursive"
        },
        "@media screen and (max-width:1014px)": {
            display: "none"
        }
    },
    html_working: {
        width: "100%"
    },
    listContainer: {
        marginTop: "20px",
        overflowY: "auto",
        maxHeight: "600px",
        fontFamily: "cursive",
        textWrap: "nowrap",
        "&>ul>li>a": {
            textDecoration: "none",
            padding: "10px 10px"
        },
        "&>ul>li": {
            margin: "10px 0px"
        }
    },
    img: {
        width: "100%"
    }
}));

function HTMLIntroduction() {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Header />
            <div className={classes.main}>
                <HTML />
                <div className={classes.slider}>
                    <h1>HTML Introduction</h1>
                    <p>
                        HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages. It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images. HTML forms the backbone of web content. In layman's terms, HTML is like the skeleton of a website. It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage. Think of it as the building blocks that create the structure and look of a website, similar to how bricks and mortar are used to build a house.
                    </p>
                    <h1>
                        What is HTML?
                    </h1>
                    <p>
                        HTML is the standard markup language for creating Web pages.
                    </p>
                    <p>
                        <li>
                            HTML stands for Hyper Text Markup Language
                        </li>
                        <li>
                            HTML is the language of the web, used to create websites.
                        </li>
                        <li>
                            HTML describes the structure of a Web page                        </li>
                        <li>
                            HTML consists of a series of elements                        </li>
                        <li>
                            HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
                        </li>
                    </p>
                    <h1>Features of HTML</h1>
                    <p>
                        <li>
                            It is platform-independent. For example, Chrome displays the same pages identically across different operating systems such as Mac, Linux, and Windows.
                        </li>
                        <li>
                            Images, videos, and audio can be added to a web page (For example - YouTube shows videos on their website)
                        </li>
                        <li>
                            HTML is a markup language and not a programming language.
                        </li>
                        <li>
                            It can be integrated with other languages like CSS, JavaScript, etc. to show interactive (or dynamic) web pages
                        </li>
                    </p>
                    <h1>Why the Term HyperText & Markup Language?</h1>
                    <p>
                        The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a language that utilizes a specific set of tags.

                        Thus, HTML is the practice of displaying text, graphics, audio, video etc. in a certain way using special tags.

                        Note: Tags are meaningful texts enclosed in angle braces, like {'<...>'}. For example, the {'<head>'} tag. Each tag has a unique meaning and significance in building an HTML page, and it can influence the web page in various ways.
                    </p>
                    <h1>A beautiful analogy to understand HTML, CSS, and JavaScript:</h1>
                    <img src={harry_html} alt="HTML" className={classes.img} />
                    <p>
                        In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car. HTML is like the car's skeleton, forming the basic structure and frame. CSS adds the paint and finishing touches, making the car look appealing with color, style, and design. JavaScript is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features. Similarly, when developing a website, HTML lays out the structure, CSS enhances its visual appeal, and JavaScript provides interactivity and dynamic content
                    </p>
                    <h1>History of HTML:</h1>
                    <p>
                        <li>In 1989, Tim Berners-Lee established the World Wide Web (www), and in 1991, he created the first version of HTML.</li>
                        <li>From 1995 to 1997, further work was done to develop and refine different versions of HTML.</li>
                        <li>In 1999, a committee was organized that standardized HTML 4.0, a version still used by many today.</li>
                        <li>The latest and most stable version of HTML is 5, also known as HTML5.</li>
                        Feel free to read more history of HTML here on the HTML Wikipedia page but I will move ahead and cover important aspects of HTML.

                        In the next tutorial, we'll continue our journey and understand how websites work
                    </p>
                    {/* <Footer /> */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HTMLIntroduction;

