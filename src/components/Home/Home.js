import React from 'react';

import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import './Home.css'
import RatingUs from '../RatingUs/RatingUs';

const Home = () => {
  
    return (
        <div>
     
      <Banner></Banner>
      <Features></Features>
      <div className='banner'>
        
      </div>
      <RatingUs></RatingUs>
      
         
          
        </div>
    );
};

export default Home;