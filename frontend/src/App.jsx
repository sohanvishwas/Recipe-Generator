import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/body.jsx';
import Footer from './Components/footer.jsx';
import About from './Components/About.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Sidebar />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
