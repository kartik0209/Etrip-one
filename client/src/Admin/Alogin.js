import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Anavbar from "../Admin/Anavbar";
const Alogin = () => {
  const history = useNavigate();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const loginuser = async (e) => {
    // e.preventDefault();


    // const res = await fetch('/Alogin', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email, password
    //   })
    // });
    // const data = await res.json();
    // if (res.status == 422 || !data) {
    //   window.alert("not");
    // } else if (email=="admin1@gmail.com" && password=="admin123") {
    //   //history("../Admin/Anavbar.js");
      
      
    // } else  {
    //   window.alert("login");
    //   //  history("/");
    // }
  }


  return (
    <><div>
      {/* <Link to="/signup" >create account</Link> */}
      <input type="text" name='email' id='email' autoComplete='off' value={email} onChange={(event) => setemail(event.target.value)} placeholder='your email' />
      <input type="password" name='password' id='password' autoComplete='off' value={password} onChange={(event) => setpassword(event.target.value)} placeholder='your password' />
      <input type="submit" name='signin ' id="signin" value="login" onClick={loginuser} />

    </div></>
  )
}

export default Alogin;