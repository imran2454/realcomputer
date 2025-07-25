import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if needed
import Footer from './components/Footer';
import Home from '../src/pages/home/Home'
import Course from './pages/course/Course';
import About from './pages/AboutUs/About'
import Addmition from './pages/addmition/Addmition';
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact';
import ResultForm from './pages/Result/ResultForm';


// Example Page Components (create these files as needed)
//

// const CourseDetailsPage = () => <div className="pt-20 text-center"><h1>Course Details Page</h1></div>;
const AboutUsPage = () => <div className="pt-20 text-center"><h1>About Us Page</h1></div>;
const AdmissionsPage = () => <div className="pt-20 text-center"><h1>Admissions Page</h1></div>;
const GalleryPage = () => <div className="pt-20 text-center"><h1>Gallery Page</h1></div>;
const ResultPage = () => <div className="pt-20 text-center"><h1>Result Page</h1></div>;
const ContactPage = () => <div className="pt-20 text-center"><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/course" element={<Course />} />
      
        <Route path="/about-us" element={<About />} />
        <Route path="/admissions" element={<Addmition />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/result" element={<ResultForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;