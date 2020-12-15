import React from 'react'
//  import { LinkContainer } from "react-router-bootstrap";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl, Carousel } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaSpinner } from "react-icons/fa";
 
// import { FaSpinner } from 'react-icons/fa';


export default () => {
    return (
      <>
     <div className=" container-fluid  c">
        <div className="row section  d-flex  ">
          <div className="col-12">
            
              <Navbar id="Nav" bg="white"  variant="white">
              <Button type="button" className="btn btn-secondary" id="signin" variant="outline-info"><p id="textsignin">SIGN IN</p></Button>
              {/* <button type="button" class="btn btn-secondary">4</button> */}
                <Navbar.Brand href="#home"><p id="pnavbar">FEATURES</p></Navbar.Brand>
                <Navbar.Brand href="#home"><p id="pnavbar">ABOUT</p></Navbar.Brand>
                <Navbar.Brand href="#home"><p id="pnavbar">PRICING</p></Navbar.Brand>
                <Navbar.Brand href="#home"><p id="pnavbar">HOME</p></Navbar.Brand>
            
                <Nav className="mr-auto"> 
                <p id="knowme">knowme </p> 
                <div  >
                <FaSpinner icon="spinner" spin id="FaSpinner" /> 
                </div>
            
              
               
                 </Nav>
                <Form inline>
                  {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                </Form>
              </Navbar>
              <Container>
          <Row>
            <Col md={12}>
             <div>  
                    
                </div></Col></Row></Container>
            
   
  
          </div>
        </div>
        
        </div>  
      
      </>
  
    )
  
  }
  
 