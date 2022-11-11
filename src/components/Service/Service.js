import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from "react-router-dom"
import './Service.css'
const Service = (props) => {
  console.log(props.name)
  const[services,setServices]=useState([]);
  
  useEffect(()=>{
    fetch('https://radiant-thicket-42845.herokuapp.com/service')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  const navigate=useNavigate();
  const context = useOutletContext()
  
  
  return (
        <div className='home'>

        <div className="card-container">
        {
          services.map(Service=>
          
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src={Service.strCategoryThumb} />
              <Card.Body>
                <Card.Title>{Service.strCategory}</Card.Title>
                <Card.Text>
                  {Service.strCategoryDescription.slice(0,200)}
                </Card.Text>
                <Card.Text style={{fontSize:"18px",color:"#10c53f"}}>
                 Price: ${Service.Price}
                </Card.Text>

                <Link  
                to={`/Service/${Service._id}`}
                
                
                
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

export default Service;