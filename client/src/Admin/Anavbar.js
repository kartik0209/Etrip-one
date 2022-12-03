import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import About from '../components/About';
import Home from "../components/Home";
import Signup from "../components/Signup";
import Contact from '../components/Contact';
import Login from "../components/Login";
import Uhotel from "../Admin/Uhotel";

export default function Anavbar() {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
            <li>
              <Link to="/Uhotel/:id">UpadateHotel</Link>
            </li>
          </ul>
        </nav>
         {/* 👇️ Wrap your Route components in a Routes component */}
         <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/contact/Signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/uhotel/:id" exact={true} element={<Uhotel/>}/>
        </Routes>

       
      </div>
    </Router>
  );
}






