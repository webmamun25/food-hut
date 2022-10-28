import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='home'>
            <h1>What would you like <br />
                to order </h1>

                
          <div className='flexing'>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Search...."
            defaultValue="Burger"
            className='input-group'
          />
        
        </Form.Group>

        <Button type="submit">Search</Button>
          </div>
          
     

        </div>
    );
};

export default Service;