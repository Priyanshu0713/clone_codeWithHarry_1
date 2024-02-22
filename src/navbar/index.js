// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//     main: {

//     },
//     main_1: {
//         fontVariant: "all-petite-caps",
//         // display: "flex",
//         // alignItems: "center",
//         height: "40px",
//         // padding: "0px 20px",
//         minWidth: "1490px",
//         "@media screen and (max-width:1014px)": {
//             minWidth: "700px",
//         },
//         "& > ul": {
//             display: "flex",
//             borderRadius: "10px 10px 0px 0px",
//             gap: "30px",
//             // padding: "5px 210px",
//             justifyContent: "end",
//             backgroundColor: "#005c5c",
//             height: "19px",
//             alignItems: "center",
//             margin: "0px 50px",
//             padding: "10px 22px",
//             "@media screen and (max-width:1014px)": {
//                 justifyContent: "flex-start",
//             },

//         },
//         "& > ul > li:nth-child(1)": {
//             // marginLeft: "190px",
//         },
//         "& > ul > li": {
//             listStyle: "none",
//             textWrap: "nowrap",
//             "& :hover": {
//                 textDecoration: "underline",
//             },
//             "@media screen and (max-width:1014px)": {
//                 display: "none",
//             }
//         },
//         "& > ul > li > a": {
//             textDecoration: "none",
//             listStyle: "none",
//             fontWeight: 600,
//             color: "white",
//         }
//     },
//     Icon: {
//         color: "white",
//         // padding: "800px",
//         position: "relative",
//         right: "800px",
//         "@media screen and (max-width:1014px)": {
//             // position: "absolute",
//             right: "0px",
//         }
//     },
// }));

// function Navbar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.main}>
//             {/* <Link to="/" className={classes.Icon}>
//                 <HomeIcon />
//             </Link> */}
// {/* <li><a href="/">{"</>"}CodeWithMe</a></li> */}
//             <div className={classes.main_1}>
//                 <ul>
//                     <Link to="/" className={classes.Icon}>
//                         <HomeIcon />
//                     </Link>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/">Courses</a></li>
//                     <li><a href="/">Blog</a></li>
//                     <li><a href="/">Notes</a></li>
//                     <li><a href="/">Contact</a></li>
//                     <li><a href="/">Work With Us</a></li>
//                     {/* <li><a href="/"><Button variant="contained" style={{ backgroundColor: "#7E22CE", color: "white", borderRadius: "10px" }}>Login</Button></a></li> */}
//                     {/* <li><a href="/"><Button variant="contained" style={{ backgroundColor: "#7E22CE", color: "white", borderRadius: "10px" }}>Signup</Button></a></li> */}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [responsiveNav, setResponsiveNav] = useState(false);

    const toggleResponsiveNav = () => {
        setResponsiveNav(!responsiveNav);
    };

    return (
        <div className={`topnav ${responsiveNav ? 'responsive' : ''}`} id="myTopnav">
            <a href="/" className="active">CodeWithMe</a>
            <a href="#news" >Work With Us</a>
            <a href="#contact" >Contact</a>
            <a href="#contact" >Notes</a>
            <a href="#contact" >Blog</a>
            <a href="#contact" >Courses</a>
            {/* <div className="dropdown">
                <button className="dropbtn">Dropdown
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> */}
            <a style={{ fontSize: '15px' }} className="icon" onClick={toggleResponsiveNav}>&#9776;</a>
        </div>
    );
};

export default Navbar;
