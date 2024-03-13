import React, { useState } from 'react';
// import from reactbootstrap
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Course() {
const baseURL ="http://localhost:3000/Course";
const navigate = useNavigate();
    // hooks

    const [courseName, setcourseName] = useState('');
    const [courseDesc, setcourseDesc] = useState('');

    // coursename change handler
    const courseNameChangeHandler = (event) => {

        setcourseName(event.target.value);
         console.log(event.target.value);
    };

    // coursename desc handler
    const courseDescChangeHandler = (event) => {

        setcourseDesc(event.target.value);
         console.log(event.target.value);
    };


    // Add sumbitactiohandler

    const submitActionHandler = (event) => {
        event.preventDefault();
        // console.log("course name", courseName);
        // console.log("course desc", courseDesc);

    axios.post(baseURL,{
        name: courseName,
        description: courseDesc
    })
    .then((response) => {
        console.log(response);
        alert("Course " + courseName +" is added");
        navigate("/");
    }).catch(error =>{
        alert("error==="+error);
    });
    }

    //css for table
    const myStyle = {
        color: 'blue',
        padding: '0px',
        borderRadius: '5px',
        marginLeft: '2px',
      };
// css for td
      const myStyle1 = {
        marginLeft: '1px',
        paddingLeft: '5px',
        borderRadius: '8px',
        
      };


    return (
        <div className="App">
            <Alert variant='primary'>
            
                    <Form onSubmit={submitActionHandler}>
                        <table align='center'>
                        <tr>
                            <td style={myStyle}><Form.Label>Course Name</Form.Label></td>
                        </tr>

                        <tr>
                            <td><input  style={myStyle1}type="text" placeholder="Enter The Course" value={courseName} onChange = {courseNameChangeHandler} required /></td>
                        </tr>

                        <tr>
                            <td style={myStyle}>
                                <Form.Label>Description</Form.Label>
                            </td>
                        </tr>

                        <tr>
                            <td> <input style={myStyle1} type="text" placeholder="Enter the description" value={courseDesc} onChange = {courseDescChangeHandler} required /></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td> <Button type='submit'>Add Course</Button><br></br><br></br>
                            <Button type='submit' >Cancel</Button></td>
                        </tr>
                        
                        </table>
                    </Form>

            
            </Alert>

        </div>

    );
}
export default Course;