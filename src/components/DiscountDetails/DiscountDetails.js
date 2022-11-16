import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './DiscountDetails.css'
import { Rating } from '@mui/material';



const DiscountDetails = () => {
    const {discountid}=useParams();
    const [count, setCount] = useState(1);
    const[service,setService]=useState({});
    const [value,setValue]=useState(2)
   
    useEffect(() => {
        const url=`http://localhost:5000/discount/${discountid}`
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
            }).then(function() {
                window.location.href = "/home";
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
                    <h1 className='text-center'>Product Details</h1>
                   <Card style={{ width: '38rem', marginLeft:"50px" }}>
      <Card.Img variant="top" style={{height:"400px"}} src={service.strCategoryThumb} />
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

<div className="col-md-4 liststyle">
    <h1 className='text-center'>
    CheckOut
    </h1>
     
      <ListGroup>
        <ListGroup.Item>Name:{service.strCategory}</ListGroup.Item>
        <ListGroup.Item >Quantity
        <div className="main-content">
            <Button style={{background: "rgb(16 139 127)",
/* Color Shadow */

boxShadow: "0px 8px 30px rgba(254, 114, 76, 0.251)",
borderRadius: "17px"}}  onClick={incrementCounter}>
            +
            </Button>
            <span style={{fontSize:"24px",marginLeft:"20px",marginRight:"20px"}} className="counter-text">{count}</span>
            <Button style={{background: "rgb(16 139 127)",
/* Color Shadow */

boxShadow: "0px 8px 30px rgba(254, 114, 76, 0.251)",
borderRadius: "17px"}} onClick={decrementCounter}>
            -
            </Button>
            <br /><br />
           
        </div>

        </ListGroup.Item>
        <ListGroup.Item>Discount:30%</ListGroup.Item>
        <ListGroup.Item>Total Amount:${totalPrice*totalCount*30/100}</ListGroup.Item>
        <ListGroup.Item>
            <Button onClick={Thanksyou} class="${swalClasses.success}">Proceed</Button>
        </ListGroup.Item>
    </ListGroup>
         
   
    
</div>


</div> 
        </div>
    );
};

export default DiscountDetails;