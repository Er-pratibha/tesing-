import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Alert, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Change=()=> {

    const baseURL="http://localhost:3000";
    // reading the data
    //const [data, setData] = useState([])
    const navigate = useNavigate();
    const {id} = useParams();
    //object creation
const [Editcoursename,setEditcoursename]=useState("");
const [Editcoursedesc,setEditcoursedesc]=useState("");
    const getDetails=()=>{
        axios.get("http://localhost:3000/Course"+"/"+id)
        .then(response => {
            const Update =response.data;
            setEditcoursename(Update.name)
            console.log(Update.name)
            setEditcoursedesc(Update.desc);
        })
    }
const courseNameChangeHandler = (event)=>{
    setEditcoursename(event.target.value);
};

const coursedescChangeHandler = (event)=>{
    setEditcoursedesc(event.target.value);
};

     
     const submitActionHandler = (event) =>{
        event.preventDefault();

        // her put the data
        axios.put('http://localhost:3000/Course'+"/"+id,{
            name:Editcoursename,
            desc:Editcoursedesc
        })
        .then(response =>{
            console.log(response);
            alert("course " + Editcoursename +" is added")
            navigate('/link');
        })
        .catch(error => console.log(error))
     }
     useEffect(()=>{
        if(id)
        getDetails(id);},[id]);

        return ( 
            <div className ="App">
              <Alert variant='primary'>
              <br></br>
              <br></br>
              <br></br>   
              <br></br>  
               <br></br>   
              <br></br>
          <Form onSubmit={submitActionHandler}>
              <Form.Group controlId="form.Name">
                <Form.Label>Enter course name</Form.Label>
                <Form.Control type="text" placeholder="drama" value={Editcoursename} onChange={courseNameChangeHandler}required/>
              </Form.Group>
              <Form.Group  controlId="form.role">
                <Form.Label>course Description</Form.Label>
                <Form.Control type="text" placeholder="text" value={Editcoursedesc} onChange={coursedescChangeHandler}required/>
              </Form.Group>
              <Button type='submit'>Edit course</Button>
             
              <Button type='submit'>Cancel</Button>
          </Form>
          </Alert>
          </div>
        );
}

export default Change;