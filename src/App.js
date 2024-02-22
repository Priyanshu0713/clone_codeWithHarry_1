import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/index';
import Mainpage from './Mainpage';
import Body from './body';
import Courses from './courses';
import Testimonials from './testimonials';
import Footer from './footer';

import HTML from "./languages/HTML/HTML";
import HTMLWorking from './languages/HTML/HTMLWorking';
import HTMLIntroduction from "./languages/HTML/HTMLIntroduction";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/html" element={<HTMLIntroduction />} />
          <Route path="/html introduction" element={<HTMLIntroduction />} />
          <Route path='/html working' element={<HTMLWorking />} />
          {/* <Route path="/body" element={<Body />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
