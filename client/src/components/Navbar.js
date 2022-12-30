import React, { useEffect, useState } from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes, json } from 'react-router-dom';
import About from './About';
import Home from "./Home";
import Usflight from '../Flight/Usflight';
import Ushotels from '../Hotel/Ushotel';
import Signup from "./Signup";
import Contact from './Contact';
import Login from "./Login";
import Anavbar from "../Admin/Anavbar";
import Uhotel from "../Admin/Uhotel";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
 import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{f5c1, faWrench} from "@fortawesome/free-solid-svg-icons"
import Error from './Error';
import Addhotel from '../Admin/Addhotel';
import { NavLink } from 'react-router-dom';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*========+++++++++++++++++===========+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/


const Navbar = () => {
  
  const user=JSON.parse(localStorage.getItem("currentuser"))
  console.log("uu",user);

  // const [users, setusers] = useState([]);
  //   useEffect(() => {
  //       getusers();
  //   }, []);
  //   const getusers = async () => {
  //       let result = await fetch("/users");
  //       result = await result.json();
  //       setusers(result);
  //   }
  //   console.log(users);
  
  

  return (
  <div className='first'>
        <nav className='navi'>
        <ul className='Unorder'>
          <h3 className='Logo'><a href="/">E-trip</a></h3>
          <div className='p1'>
              <li className='List'><a href="./Login">Login</a></li>
              <li className='List'><a href="./Signup">Register</a></li>
            <li className='List'><a href="./Ushotel">hotel</a></li>
            <li className='List'><a href="./Usflight">Flight</a></li>
          </div>
        </ul>
        
      </nav>
      {/* <div className='Box1'>
        <input type="text" placeholder='Enter city' />
        <input type="Date" placeholder='Check-IN' />
        <input type="Date" placeholder='Check-Out' />

      </div> */}
      {/* 👇️ Wrap your Route components in a Routes component */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Ushotels />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Ushotel" element={<Ushotels />} />
          <Route path="/Usflight" element={<Usflight />} />
          <Route path="*" element={<Error />} />
          <Route path="/Admin" element={<Anavbar />} />
        </Routes>
      </Router> */}
    
  </div>

  );
}




export default Navbar;


