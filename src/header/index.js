import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    main_1: {
        fontVariant: "all-petite-caps",
        // display: "flex",
        // alignItems: "center",
        height: "40px",
        // padding: "0px 20px",
        minWidth: "1490px",
        "@media screen and (max-width:1014px)": {
            minWidth: "700px",
        },
        "& > ul": {
            display: "flex",
            gap: "30px",
            // padding: "5px 210px",
            justifyContent: "center",
            backgroundColor: "#005c5c",
            height: "40px",
            alignItems: "center",
            margin: "0px 50px",
        },
        "& > ul > li:nth-child(1)": {
            // marginLeft: "190px"
        },
        "& > ul > li": {
            listStyle: "none",
            "& :hover": {
                textDecoration: "underline",
            }
        },
        "& > ul > li > a": {
            textDecoration: "none",
            listStyle: "none",
            fontWeight: 600,
            color: "white",
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
            {/* <Link to="/" className={classes.Icon}>
                <HomeIcon />
            </Link> */}
            <div className={classes.main_1}>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/js">JS</Link></li>
                    <li><Link to="/c">C</Link></li>
                    <li><Link to="/cpp">C++</Link></li>
                    <li><Link to="/java">JAVA</Link></li>
                    <li><Link to="/python">PYTHON</Link></li>
                    <li><Link to="/php">PHP</Link></li>
                    <li><Link to="/reactjs">REACT.JS</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default MyComponent;


// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     main: {
//         width: "1435px",
//         fontVariant: "all-petite-caps",
//         display: "flex",
//         alignItems: "center",
//         height: "40px",
//         padding: "0px 20px",
//         overflowX: "auto",
//         backgroundColor: "#333",
//         "@media screen and (max-width:1014px)": {
//             // display: "none",
//             overflowX: "auto",
//             width: "auto"
//         },
//         "& > ul li:nth-child(n+1):nth-child(-n+9)": {
//             "@media screen and (max-width:1014px)": {
//                 // display: "none",
//                 // overflowX: "auto"
//             },
//         },
//         "& > ul": {
//             display: "flex",
//             gap: "30px",
//             // padding: "5px 210px",

//         },
//         "& > ul > li:nth-child(1)": {
//             // marginLeft: "130px"
//         },
//         "& > ul > li": {
//             listStyle: "none",
//             "& :hover": {
//                 textDecoration: "underline"
//             }
//         },
//         "& > ul > li > a": {
//             textDecoration: "none",
//             listStyle: "none",
//             fontWeight: 600,
//             color: "#FFFF",
//         }
//     },
//     // Icon: {
//     //     color: "#7E22CE",
//     //     paddingLeft: "30px",
//     //     // padding: "6px"
//     // },
// }));

// function MyComponent() {
//     const classes = useStyles();

//     return (
//         <div className={classes.main}>
//             {/* <Link to="/" className={classes.Icon}>
//                 <HomeIcon />
//             </Link> */}
//             <ul>
//                 <li><Link to="/html">HTML</Link></li>
//                 <li><Link to="/css">CSS</Link></li>
//                 <li><Link to="/js">JAVASCRIPT</Link></li>
//                 <li><Link to="/c">SQL</Link></li>
//                 <li><Link to="/cpp">PYTHON</Link></li>
//                 <li><Link to="/java">JAVA</Link></li>
//                 <li><Link to="/python">PHP</Link></li>
//                 <li><Link to="/php">C</Link></li>
//                 <li><Link to="/reactjs">C++</Link></li>
//                 <li><Link to="/python">BOOTSTRAP</Link></li>
//                 <li><Link to="/php">REACT</Link></li>
//                 <li><Link to="/python">MYSQL</Link></li>
//                 <li><Link to="/php">JQUERY</Link></li>
//                 <li><Link to="/python">NODEJS</Link></li>
//                 <li><Link to="/php">TYPESCRIPT</Link></li>
//                 <li><Link to="/python">GIT</Link></li>
//                 <li><Link to="/php">MONGODB</Link></li>

//             </ul>
//         </div>
//     );
// }

// export default MyComponent;
