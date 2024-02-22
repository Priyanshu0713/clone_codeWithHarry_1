import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../../header/index";
import Footer from "../../footer";
import html_working from "../../images/html_working.png";
import HTML from "./HTML";
import Navbar from "../../navbar";

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
function HTMLWorking() {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Header />
            <div className={classes.main}>
                <HTML />
                <div className={classes.slider}>
                    <div className={classes.slider}>
                        <h1>HTML Editors</h1>
                        <p>
                            A simple text editor is all you need to learn HTML.
                        </p>
                        <h1>
                            Learn HTML Using Notepad or TextEdit                        </h1>
                        <p>
                            Web pages can be created and modified by using professional HTML editors.<br />

                            However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).<br />

                            We believe that using a simple text editor is a good way to learn HTML.<br />

                            Follow the steps below to create your first web page with Notepad or TextEdit.<br />
                        </p>
                        <h1>Step 1: Open Notepad (PC)</h1>
                        <p>
                            Windows 8 or later:<br />
                            Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.<br />

                            Windows 7 or earlier:<br />

                            Open Start {">"} Programs {">"} Accessories {">"} Notepad
                        </p>
                        <h1>Step 1: Open TextEdit (Mac)</h1>
                        <p>
                            Open Finder {">"} Applications {">"} TextEdit<br />

                            Also change some preferences to get the application to save files correctly. In Preferences {">"} Format {">"} choose "Plain Text" <br />

                            Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text". <br />

                            Then open a new document to place the code. <br />
                        </p>
                        <h1>Step 2: Write Some HTML</h1>
                        <p>
                            Write or copy the following HTML code into Notepad:<br /><br />
                            <span>

                                <span style={{ color: "#741374" }}>{"<!DOCTYPE "}</span>
                                <span style={{ color: "red" }}>{" html>"}</span><br />
                                <span style={{ color: "#741374" }}>
                                    {"<html>"}
                                </span><br />
                                <span style={{ color: "#741374" }}>{"<body>"}</span><br /><br />

                                <span style={{ color: "#741374" }}>{"<h1>My First Heading</h1>"}<br /><br />

                                    {"<p>My first paragraph.</p>"}<br />
                                </span><br />
                                <span style={{ color: "#741374" }}>{"</body>"}</span><br />
                                <span style={{ color: "#741374" }}>{"</html>"}</span><br />
                            </span>
                        </p>

                        <h1>How does a basic website work?</h1>
                        <p><li>
                            Web Browser(client) requests websites like www.codewithharry.com from the web server.
                        </li>
                            <li>
                                Web server in return sends HTML, CSS, and JavaScript files to it.
                            </li>
                            <li>
                                HTML, CSS, and JavaScript files are parsed by a web browser which is responsible for showing you a beautiful website.
                            </li>
                        </p>
                        <h1>How does a browser work?</h1>
                        <p>
                            A web browser plays a crucial role in parsing and rendering HTML code to the client. A web browser is a complex program that performs many tasks behind the scenes. Here's a summary of how it works:
                        </p>
                        <p>
                            <li>
                                A browser is an application that reads HTML documents and displays them as web pages. Browsers can't access the content directly from where it's stored; this is where servers come into play.
                            </li>
                            <li>

                                A server acts as an intermediary, listening to browser requests and fulfilling them by delivering the HTML document to the browser.
                            </li>
                            <li>
                                Web browsers perform two main tasks: parsing and rendering.
                            </li>
                            <li>
                                During the parsing stage, the browser receives raw bytes, which are converted into characters. These characters are then converted into tokens, which in turn are transformed into nodes. These nodes are organized into a tree-like data structure known as the DOM (Document Object Model).
                            </li>
                            <li>
                                Once the DOM tree is constructed, the browser moves on to the rendering stage. At this point, each node in the DOM tree is rendered and displayed on the screen.
                            </li>
                        </p>
                        <p>
                            Dont worry about how browser exactly works just yet. Rather focus on learning HTML. In the next tuotrial we will install VS Code and some extensions for writing our HTML code.
                        </p>
                    </div >
                </div >
            </div >
            <Footer />
        </>
    );
}

export default HTMLWorking;
