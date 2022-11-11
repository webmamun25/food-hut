import { Rating } from '@mui/material';
import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from "react-router-dom"
const RatingUs = () => {
  const[ratings,setRating]=useState([]);
  
  useEffect(()=>{
    fetch('https://radiant-thicket-42845.herokuapp.com/found')
    .then(res=>res.json())
    .then(data=>{
      setRating(data)
    }
     
        )
  },[])
  console.log(ratings) 
    
    return (
        <div style={{marginTop:"140px"}}>
            <div className="card-container">
        
        {
            ratings.map(Service=>
               
            <Card style={{ width: '24rem' ,margin:"10px"}}>
              <Card.Img variant="top" style={{height:"300px",width:"100%"}}   src={Service.strCategoryThumb} />
              <Card.Body>
                <Card.Title>{Service.strCategory}</Card.Title>
                <Card.Text>
                  {Service.strCategoryDescription.slice(0,200)}
                </Card.Text>
               
                <Rating name="read-only" value={Service.value} readOnly />
              </Card.Body>
            </Card>
          
          )
         }
        </div>
        </div>
    );
};

export default RatingUs;