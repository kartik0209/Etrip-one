import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Home from "./Home";
import Usflight from '../Flight/Usflight';
import Ushotels from '../Hotel/Ushotel';
import Signup from "./Signup";
import Contact from './Contact';
import Login from "./Login";
import Anavbar from "../Admin/Anavbar";
import Uhotel from "../Admin/Uhotel";
import "./a.css";
import Hotels from '../Admin/Hotels';
export default function Navbar() {
  return (

    <Router>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Register</Link>
        </li>


      </ul>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <div >
        <nav>
          <ul>
            <li>
              <Link to="/Ushotel">Hotel</Link>
            </li>
            <li>
              <Link to="/Usflight">Flight</Link>
            </li>


          </ul>
        </nav>
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Ushotels />} />
          <Route path="/Ushotel" element={<Ushotels />} />
          <Route path="/Usflight" element={<Usflight />} />
          <Route path="/Admin/Anavbar" element={<Anavbar/>}/>
        </Routes>


      </div>
    </Router>
  );
}






