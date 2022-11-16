import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Discount.css'


const Discount = () => {
    const[discounts,setdiscounts]=useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:5000/discount')
    .then(res=>res.json())
    .then(data=>setdiscounts(data))
  },[])
  const navigate=useNavigate();
    return (
        <div className='discount'>
           <div className="card-container">
        {
          discounts.map(discount=>
          
            <Card style={{ width: '24rem' }}>
              <Card.Img style={{height:"200px"}} variant="top" src={discount.strCategoryThumb} />
              <Card.Body>
                <Card.Title>{discount.strCategory}</Card.Title>
                <Card.Text>
                  {discount.strCategoryDescription.slice(0,200)}
                </Card.Text>
                <Card.Text style={{fontSize:"18px",color:"#10c53f"}}>
                 Price:  <del style={{fontSize:"18px",color:"red"}}>${discount.Price} </del> &nbsp; &nbsp; &nbsp; <span>${discount.Price*30/100}</span>  
                </Card.Text>

                <Link  
                to={`/discount/${discount._id}`}
                
                
                
                style={{textDecoration:"none"}}
                variant="primary">Order Now</Link>
              </Card.Body>
            </Card>
          
          )
         }
        </div>
        </div>
    );
};

export default Discount