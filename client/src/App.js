import React from 'react';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anavbar from './Admin/Anavbar';
import Login from './components/Login';
import Ushotels from './Hotel/Ushotel';
import Usflight from './Flight/Usflight';
import Error from './components/Error';
import Signup from './components/Signup';

import Contact from './components/Contact';
import Userlist from './Admin/Userlist';
import Hotels from './Admin/Hotels';
import Uhotel from './Admin/Uhotel';
import Footer from './components/Footer';
import Addhotel from './Admin/Addhotel';
import Rooms from './Hotel/Rooms';
import Sconf from './Hotel/Sconf';
import Suconf from './Hotel/Suconf';
import Dconf from './Hotel/Dconf';


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/ushotel/:uu" element={<Ushotels />} />
          <Route path="/" element={<Ushotels />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Ushotel" element={<Ushotels />} />
          <Route path="/Usflight" element={<Usflight />} />
          <Route path="*" element={<Error />} />
          <Route path="/Admin" element={<Anavbar />} />
          <Route path="/signup" element={<Signup />} />

          {/* //rooms */}
          <Route path='/rooms/:roomid' element={<Rooms/>}/>
          <Route path='/rooms/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Rooms/>}/>
          <Route path='/rooms/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate/ushotel' element={<Ushotels/>}/>
          
          <Route path='/Sconf/:roomid' element={<Sconf/>}/>
          <Route path='/Sconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Sconf/>}/>              
          <Route path='/Dconf/:roomid' element={<Dconf/>}/> 
          <Route path='/Dconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Dconf/>}/>              
          <Route path='/Suconf/:roomid' element={<Suconf/>}/>         
          <Route path='/Suconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Suconf/>}/>      



            {/* admin */}
          <Route path="/addhotel" element={<Addhotel/>} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/uhotel/:id" exact={true} element={<Uhotel />} />


        </Routes>
      </Router>
      
    </>
  );
}

export default App;
