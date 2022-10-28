import React from 'react';
import './Banner.css'
import food from '../../images/banner-food.jpg';
import chef from '../../images/happy.png';
import 'animate.css';
const Banner = () => {
    return (
        <div className='banner'>
            <img className='banner-food'  src={food} alt="" />
            <img className='banner-chef animate__animated animate__swing'  src={chef} alt="" />
            
        </div>
    );
};

export default Banner;