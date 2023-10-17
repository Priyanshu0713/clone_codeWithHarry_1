import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/index';
import Header from './header';
import Body from './body';
import Courses from './courses';
import Testimonials from './testimonials';
import Footer from './footer';

function App() {
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

export default App;
