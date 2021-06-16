import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button,Card,Col,Form,FormGroup,Container,InputGroup,FormControl} from 'react-bootstrap';
import axios from 'axios';
import env from 'react-dotenv';

function App() {
  const[txtInput,setTextInput] = useState("");
  const[txtInput1,setTextInput1] = useState("");
  const[txtInput2,setTextInput2] = useState("");
  const[txtInput3,setTextInput3] = useState("");
  console.log(env.API_host)
  const serviceUrl = env.API_host+'/apihost/iecho/'
  const onClick  = ()=>{
    const params ={text:txtInput}
    axios.get(serviceUrl,{params})
    .then(response =>{
    
      setTextInput1(`${response.data.response.text}`);
    })
    
    setTextInput2(`${txtInput1}`);
    setTextInput3(`${txtInput2}`);
  
  }

  return (
    <Container>
  <Card className="bg-danger" style ={{marginTop: "10px"}}>
    <Form style ={{marginTop: "10px"}}>
      <FormGroup>
        <Col sm={12}>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Input Text"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange ={(e)=> setTextInput(e.target.value)}
    />
    <Button onClick={onClick} variant="primary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
          
        </Col>
       
      </FormGroup>

    </Form>
    </Card>
    <Card className="card" style ={{marginTop: "100px"}} sm={10} >
      <FormGroup style ={{marginTop: "20px"}}>
        <Col sm={10}>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value ={txtInput1}
    />
   
  </InputGroup>
          
        </Col>
        <Col sm={10}>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value = {txtInput2}
    />
   
  </InputGroup>
          
        </Col>
        <Col sm={10}>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value ={txtInput3}
    />
   
  </InputGroup>
          
        </Col>
       
      </FormGroup>

    </Card>
    </Container>

  );
}

export default App;
