import React from 'react';

import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import './Home.css'

const Home = () => {
  
    return (
        <div>
     
      <Banner></Banner>
      <Features></Features>
      <div className='banner'>
        
      </div>
      
         
          
        </div>
    );
};

export default Home;