import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import NavBar from './layout/navbar'
import Box from './layout/box'

function App() {
  return (
    <div>
    <NavBar/>
      <Container>
        <Row>
          <Col md="3">
          <Box/> 
          </Col>

          <Col md="3">
          <Box/> 
          </Col>

          <Col md="3">
          <Box/> 
          </Col>

          <Col md="3">
          <Box/> 
          </Col>

          
        </Row>
      </Container>
     
    

    </div>
    
   
  );
}

export default App;
