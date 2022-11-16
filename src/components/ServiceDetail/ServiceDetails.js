import React from 'react';
import './ServiceDetails.css'
import {Link, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'

import { Alert, Avatar, Stack, TextField, Typography } from '@mui/material';

import Rating from '@mui/material/Rating';
const ServiceDetails = (props) => {
    console.log(props.userdb.email)
    const {serviceid}=useParams();
    const [count, setCount] = useState(1);
    const[service,setService]=useState({});
    const [value,setValue]=useState(2)
    
    useEffect(() => {
        const url=`http://localhost:5000/service/${serviceid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    }, []);



    const incrementCounter = () => {
            setCount(count + 1)
      }
   
    const decrementCounter = () => {
        if(count>0){
            setCount(count-1)
        }
      }
    
    
    
      const totalPrice=parseInt(service.Price)
      const totalCount=parseInt(count)
      const Thanksyou=()=>
      {
          setCount(0)
          Swal.fire({
              position: 'top-end',
              type: "success",
              title: `Thank You to pay ${totalPrice*totalCount}`,
              showConfirmButton: false,
              timer: 1500
            })
      }
      


      const handlerating = (e) =>{
        e.preventDefault()
          const given={...service,value}
              
            fetch("http://localhost:5000/ratingus",{
              method:"POST",
              headers:{
                "content-type":"application/json"
        
              },
              body:JSON.stringify(given)
            })
            .then(res=>res.json())
            .then(data=>{
                    console.log(data)
            }).then(function() {
                window.location.href = "/";
            })
          
      }
    return (
        <div className="detail">
            
            <div className="row">

                <div className="col-md-6 ">
                    <h1>Product details</h1>
                   <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={service.strCategoryThumb} />
      <Card.Body>
        
        <Card.Text>
        {service.strCategoryDescription}
        </Card.Text>
        <Card.Text>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
        </Card.Text>
        <Button sx={{ mx: 3 }}  onClick={handlerating} variant="primary">
              Rate us
        </Button>
         
        
      </Card.Body>
    </Card>

                </div>
                
                <div className="col-md-4">
                    <h1>
                    CheckOut
                    </h1>

                    <ListGroup style={{fontSize:"18px"}}>
                        <ListGroup.Item>User Name:{props.userdb.displayName}</ListGroup.Item>
                        <ListGroup.Item>Email:{props.userdb.email}</ListGroup.Item>
                        <ListGroup.Item>Name:{service.strCategory}</ListGroup.Item>
                        <ListGroup.Item >Quantity
                        <div className="main-content">
                            <Button style={{background: "#FE724C",
/* Color Shadow */

boxShadow: "0px 8px 30px rgba(254, 114, 76, 0.251)",
borderRadius: "17px"}}  onClick={incrementCounter}>
                            +
                            </Button>
                            <span style={{fontSize:"24px",marginLeft:"20px",marginRight:"20px"}} className="counter-text">{count}</span>
                            <Button style={{background: "#FE724C",
/* Color Shadow */

boxShadow: "0px 8px 30px rgba(254, 114, 76, 0.251)",
borderRadius: "17px"}} onClick={decrementCounter}>
                            -
                            </Button>
                            <br /><br />
                           
                        </div>

                        </ListGroup.Item>
                        <ListGroup.Item>No Discount</ListGroup.Item>
                        <ListGroup.Item>Total Amount:${totalPrice*totalCount}</ListGroup.Item>
                        <ListGroup.Item>
                       <Button onClick={Thanksyou} class="${swalClasses.success}">Proceed</Button>
                            
                        </ListGroup.Item>
                    </ListGroup>
                    
                </div>


            </div>

        </div>
    );
};

export default ServiceDetails;