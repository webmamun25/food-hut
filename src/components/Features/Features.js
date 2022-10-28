import React from 'react';
import  { useState,useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Features.css';
import { motion } from "framer-motion"

import Pulse from 'react-reveal/Pulse';
const Features = () => {
    const [features, setfeatures] = useState([]);
    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res=>res.json())
      .then(data=>setfeatures(data?.categories?.slice(0,4)))
    }, [features]);
    return (
        
       
        <CardGroup className='feature-group'>
      
        
        {
            features.map(feature=>
                
                <Card className='feature-card border-0'>
                
                <motion.div
                        drag
                        dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                        }}
                    >
                                <Card.Img className='card-top' src={feature?.strCategoryThumb} />
                            </motion.div>
                
                
                
                    <Card.Body className='title-text'>
                    
                    <Card.Title className='text-center' style={{color:"#FE724C"}}>{feature?.strCategory}</Card.Title>
                    <Card.Text >
                        {feature?.strCategoryDescription.slice(0,150).concat("...")}
                    </Card.Text>
                    </Card.Body>
        
                </Card>
            
            )
        }
      
        </CardGroup>
       
    );
};

export default Features;