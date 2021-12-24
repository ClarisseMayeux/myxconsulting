import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButton from './components/SocialButtons.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'
import Services from './pages/mesServices'
import Blog from './pages/blog'
import Apropos from './pages/Apropos'
import './style/App.css'
import 'materialize-css/dist/css/materialize.min.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <FloatingButton style={{ right: 110, bottom: 100 }} />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/apropos' element={<Apropos/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
