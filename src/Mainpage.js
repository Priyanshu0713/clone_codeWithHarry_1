import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/index';
import Header from './header';
import Body from './body';
import Courses from './courses';
import Testimonials from './testimonials';
import Footer from './footer';

import HTML from "./languages/HTML/HTML";

function Mainpage() {
    return (

        <>
            <Navbar />
            <Header />
            <Body />
            <Courses />
            <Testimonials />
            <Footer />
        </>

    );
}

export default Mainpage;
