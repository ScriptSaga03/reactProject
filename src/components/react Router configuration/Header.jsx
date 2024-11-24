import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../reusable components/Navbar';
import Footer from '../reusable components/Footer'

import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'
// import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut';


function Header() {
  return (
    <Router>
      <Navbar />

      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer/>
      </div>


    </Router>
  );
}

export default Header;


