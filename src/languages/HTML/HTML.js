// import React from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//     main: {
//         display: 'flex',
//         gap: "60px",
//         margin: "0px 40px",
//     },
//     description: {
//         color: "#ffff",
//         fontWeight: 500,
//         minWidth: "22%",
//         "&>h1": {
//             fontFamily: "cursive"
//         },
//         "@media screen and (max-width:1014px)": {
//             display: "none"
//         }
//     },
//     icon: {
//         display: "none",
//         "@media screen and (max-width:1014px)": {
//             float: 'right',
//             display: 'block',
//         },
//     },
//     listContainer: {
//         marginTop: "20px",
//         marginLeft: "-30px",
//         overflowY: "auto",
//         maxHeight: "680px",
//         fontFamily: "cursive",
//         whiteSpace: "nowrap",  // Fix: Corrected property name
//         backgroundColor: "#E7E9EB",
//         "&>ul>li>a": {
//             textDecoration: "none",
//             padding: "10px 10px",
//             color: "black",
//             "&:hover": {
//                 color: "white"
//             }
//         },
//         "&>ul": {
//             backgroundColor: "#E7E9EB",
//             color: "black",
//         },
//         "&>ul>li": {
//             margin: "10px 0px",
// "&:hover": {
//     boxShadow: "inset 1px 0px 20px 20px #04aa6d",
//     borderRadius: "5px",
//     width: "min-content",
//     color: "#04aa6d"
// }
//         },
//         "&>h4": {
//             margin: "10px 10px",
//             color: "black",
//         }
//     },
//     img: {
//         width: "100%"
//     },
//     '@media screen and (max-width:1014px)': {
//         description: {
//             minWidth: '700px',
//             margin: '0px 50px 1px 50px',
//         },
//         'description a:not(:first-child), dropdown .dropbtn': {
//             display: 'none',
//         },
//         // 'description a.icon': {
//         //     float: 'right',
//         //     display: 'block',
//         // },
//     },
//     '@media screen and (max-width:800px)': {
//         description: {
//             minWidth: '600px',
//             margin: '0px 50px 1px 50px',
//         },
//     },
//     '@media screen and (max-width:1014px)': {
//         'description.responsive': {
//             position: 'relative',
//         },
//         'description.responsive .icon': {
//             position: 'absolute',
//             right: '0',
//             top: '0',
//         },
//         'description.responsive a': {
//             float: 'none',
//             display: 'block',
//             textAlign: 'left',
//         },
//     },
// }));


// function HTML() {
//     const classes = useStyles();
//     const [responsiveNav, setResponsiveNav] = useState(false);

//     const listItem_1 = [
//         "HTML Introduction",
//         "HTML Working",
//         "HTML Execution",
//         "HTML Page Structure",
//         "HTML Tags",
//         "HTML Elements",
//         "HTML Attributes",
//         "HTML Comments",
//         "HTML Id & Classes",
//     ];
//     const listItem_2 = [
//         "Skeletal Tags",
//         "Heading Tags",
//         "Paragraph Tag",
//         "Horizontal Line Tag",
//         "Line Break Tag",
//         "Anchor Tag",
//         "Image Tag",
//         "Pre Tag",
//     ];
//     const listItem_3 = [
//         "HTML Inline Elements",
//         "HTML Block Elements",
//     ];
//     const listItem_4 = [
//         "HTML Lists",
//         "HTML Unordered List",
//         "HTML Ordered List",
//         "HTML Definition Lists",
//     ];
//     const listItem_5 = [
//         "HTML Tables",
//         "More on Tables",
//     ];

//     const listItem_6 = [
//         "Introduction to HTML Forms",
//         "HTML Input Types",
//         "Textarea & Select",
//         "More on forms",
//     ];

//     const listItem_7 = [
//         "HTML Meta Tags",
//         "Link & Script Tags",
//     ];

//     const listItem_8 = [
//         "Video & Audio Tags",
//         "SVG in HTML",
//         "iFrames in HTML",
//     ];

//     const listItem_9 = [
//         "HTML Code Tag",
//         "HTML Semantic Tags",
//         "HTML Canvas",
//         "HTML Global Attributes",
//         "HTML Entities",
//         "HTML Quotation Tag",
//         "Obsolete HTML Tags",
//         "Character Sets",
//     ];

//     const toggleResponsiveNav = () => {
//         setResponsiveNav(!responsiveNav);
//     };
//     return (
//         <>
//             <div className={classes.main}>
//                 <div className={`description ${responsiveNav ? 'responsive' : ''}`} id="myTopnav">
//                     <div className={`${classes.listContainer} scroll-container`}>
//                         <h4>INTRODUCTION</h4>
//                         <ul className="scroll-list">
//                             {listItem_1.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HTML BASIC TAGS</h4>
//                         <ul className="scroll-list">
//                             {listItem_2.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>INLINE & BLOCK ELEMENTS</h4>
//                         <ul className="scroll-list">
//                             {listItem_3.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HTML LISTS</h4>
//                         <ul className="scroll-list">
//                             {listItem_4.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HTML TABLES</h4>
//                         <ul className="scroll-list">
//                             {listItem_5.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HTML FORMS</h4>
//                         <ul className="scroll-list">
//                             {listItem_6.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HEAD ELEMENTS</h4>
//                         <ul className="scroll-list">
//                             {listItem_7.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>HTML MEDIA</h4>
//                         <ul className="scroll-list">
//                             {listItem_8.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <h4>Miscellaneous Tags</h4>
//                         <ul className="scroll-list">
//                             {listItem_9.map((item, index) => (
//                                 <li key={index}>
//                                     <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <a style={{ fontSize: '15px' }} className="icon" onClick={toggleResponsiveNav}>&#9776;</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default HTML;


import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        // gap: "60px",
        margin: "0px 40px",
        "@media screen and (max-width:1014px)": {
            margin: "0px -10px"
        }
    },
    description: {
        color: "#ffff",
        fontWeight: 500,
        minWidth: "22%",
        "&>h1": {
            fontFamily: "cursive"
        },
        "@media screen and (max-width:1014px)": {
            display: "none"
        }
    },
    listContainer: {
        marginTop: "20px",
        marginLeft: "-30px",
        overflowY: "auto",
        maxHeight: "680px",
        fontFamily: "cursive",
        textWrap: "nowrap",
        backgroundColor: "#E7E9EB",
        "&>ul>li>a": {
            textDecoration: "none",
            padding: "10px 10px",
            color: "black",
            "&:hover": {
                color: "white"
            }
        },
        "&>ul": {
            backgroundColor: "#E7E9EB",
            color: "black",
        },
        "&>ul>li": {
            margin: "10px 0px",
            "&:hover": {
                boxShadow: "inset 1px 0px 20px 20px #04aa6d",
                borderRadius: "5px",
                width: "min-content",
                color: "#04aa6d"
            }
        },
        "&>h4": {
            margin: "10px 10px",
            color: "black",
        }
    },
    img: {
        width: "100%"
    }
}));

function HTML() {
    const classes = useStyles();

    const listItem_1 = [
        "HTML Introduction",
        "HTML Working",
        "HTML Execution",
        "HTML Page Structure",
        "HTML Tags",
        "HTML Elements",
        "HTML Attributes",
        "HTML Comments",
        "HTML Id & Classes",
    ];
    const listItem_2 = [
        "Skeletal Tags",
        "Heading Tags",
        "Paragraph Tag",
        "Horizontal Line Tag",
        "Line Break Tag",
        "Anchor Tag",
        "Image Tag",
        "Pre Tag",
    ];
    const listItem_3 = [
        "HTML Inline Elements",
        "HTML Block Elements",
    ];
    const listItem_4 = [
        "HTML Lists",
        "HTML Unordered List",
        "HTML Ordered List",
        "HTML Definition Lists",
    ];
    const listItem_5 = [
        "HTML Tables",
        "More on Tables",
    ];

    const listItem_6 = [
        "Introduction to HTML Forms",
        "HTML Input Types",
        "Textarea & Select",
        "More on forms",
    ];

    const listItem_7 = [
        "HTML Meta Tags",
        "Link & Script Tags",
    ];

    const listItem_8 = [
        "Video & Audio Tags",
        "SVG in HTML",
        "iFrames in HTML",
    ];

    const listItem_9 = [
        "HTML Code Tag",
        "HTML Semantic Tags",
        "HTML Canvas",
        "HTML Global Attributes",
        "HTML Entities",
        "HTML Quotation Tag",
        "Obsolete HTML Tags",
        "Character Sets",
    ];
    return (
        <>
            <div className={classes.main}>
                <div className={classes.description}>
                    <div className={`${classes.listContainer} scroll-container`}>
                        <h4>INTRODUCTION</h4>
                        <ul className="scroll-list">
                            {listItem_1.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HTML BASIC TAGS</h4>
                        <ul className="scroll-list">
                            {listItem_2.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>INLINE & BLOCK ELEMENTS</h4>
                        <ul className="scroll-list">
                            {listItem_3.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HTML LISTS</h4>
                        <ul className="scroll-list">
                            {listItem_4.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HTML TABLES</h4>
                        <ul className="scroll-list">
                            {listItem_5.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HTML FORMS</h4>
                        <ul className="scroll-list">
                            {listItem_6.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HEAD ELEMENTS</h4>
                        <ul className="scroll-list">
                            {listItem_7.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>HTML MEDIA</h4>
                        <ul className="scroll-list">
                            {listItem_8.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h4>Miscellaneous Tags</h4>
                        <ul className="scroll-list">
                            {listItem_9.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${encodeURIComponent(item.toLowerCase())}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HTML;

