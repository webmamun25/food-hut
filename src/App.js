import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'

import Notfound from './components/Notfound/Notfound'
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import app from './firebase.init';

import { getAuth,GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";


import { useState } from 'react';
import Discount from './components/Discount/Discount';
const auth = getAuth(app);
function App() {

  const[user,setUser]=useState([])
    const provider = new GoogleAuthProvider();
    const handlegoogleSignin=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user=result.user
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error)
          })
       
    }

    const handleSignout=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
      }).catch((error) => {
        // An error happened.
        setUser({});
      });
    }
  return (
    <div>
    <Header handlegoogleSignin={handlegoogleSignin} user={user} handleSignout={handleSignout}></Header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discount" element={<Discount/>} />
        
        <Route path="/Service" element={<Service/>} />
    
        <Route path="*" element={<Notfound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
