import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'


import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom"
import app from './firebase.init';

import { getAuth,GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";


import { useState } from 'react';
import Discount from './components/Discount/Discount';
import ServiceDetails from './components/ServiceDetail/ServiceDetails';
import DiscountDetails from './components/DiscountDetails/DiscountDetails';
import RatingUs from './components/RatingUs/RatingUs';
const auth = getAuth(app);
function App() {

  const[user,setUser]=useState([])
  
    const provider = new GoogleAuthProvider();
    const handlegoogleSignin=(e)=>{
      e.preventDefault()
        signInWithPopup(auth, provider)
        .then(result=>{
            const user=result.user
            setUser(user)
            
        })
        .catch((error) => {
            
          
            console.log(error)
          })
       
    }

    const handleSignout=(e)=>{
      e.preventDefault()
      signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
      }).catch((error) => {
        // An error happened.
        setUser({});
      });
    }

    useEffect((e)=>{
      e.preventDefault()
      onAuthStateChanged(auth,user=>{
        setUser(user);
      })
    },[])

    
  return (
    <div>
    <Header handlegoogleSignin={handlegoogleSignin} user={user} handleSignout={handleSignout}></Header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discount"  element={<Discount/>} />
        <Route path="/discount/:discountid" element={<DiscountDetails/>} />
        <Route path="/rating" element={<RatingUs  user={user} ></RatingUs>} />
        
        <Route path="/Service"  element={<Service  />} />
        <Route path="/Service/:serviceid"  element={<ServiceDetails userdb={user}  />} />

    
        

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
