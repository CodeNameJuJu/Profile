import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } 
from 'react-router-dom';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer class="py-3 my-4 bg-dark text-center">
          <Footer />
        </footer>  
      </BrowserRouter>
    </div>
  );
}

export default App;
