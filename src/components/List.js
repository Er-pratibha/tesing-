import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function List_course() {
                    const baseURL ="http://localhost:3000";
                    const [course, setcourse] = useState([]);
                    const Navigate= useNavigate();
                    
                    const setcourseData = () =>{
                        axios.get(baseURL+"/Course")

                        .then((response) =>{
                            setcourse(response.data);

                        }).catch(error =>{
                            alert("error ocurred" + error);
                        });
                    }
    
                    useEffect(() =>{
                        setcourseData();
                    },[]);
                    const removeCourse = (id) =>{
                        axios.delete(baseURL+"/Course/"+id)
                    
                        .then((response) =>{
                            alert("Course is deleted");
                            setcourseData(response);

                        }).catch(error =>{
                            alert("error ocurred" + error);
                        });
                    }

                    return (
                        <div className="App">
                            <h1>Course List</h1>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>

                                </thead>
                                <tbody>
                                    {
                                        course && course.map((course,index) =>(
                                            <tr>
                                               
                                                <td>{course.id}</td>
                                                <td>{course.name}</td>
                                                <td>{course.description}</td>


                                                <td> <button className="button" onClick={ ()=>Navigate("/editdetails/"+(course.id))}><FaEdit /> </button> |

                                                    <button className="button" onClick={ ()=>removeCourse(course.id)}>
                                                        <FaTrash />
                                                    </button>

                                                </td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>

                        </div>

                    );
                }
export default List_course;