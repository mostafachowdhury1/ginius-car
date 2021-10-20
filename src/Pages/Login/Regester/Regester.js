import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Regester = () => {

    const{signInGoogle}=useAuth()
    
    return (
        <div> 
            <h5>create an accout </h5>
               <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    
   
    
  </fieldset>


  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
    <button  className="btn btn-warning" onClick={signInGoogle}>google sign in</button>

      <Button type="submit" className="text-dark">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
        </div>
    );
};

export default Regester;