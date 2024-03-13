//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from './components/Course';
import Change from './components/Change';
import List_course from './components/List';


function App() {
  return (
    <Router> 
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/Course">Course</Link>
                <Link className="nav-link" to="/List">List</Link>
                <Link className="nav-link" to="/Change">Change</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route exact path='/List' element={<List_course/>}/>
          <Route exact path='/Course' element={<Course/>}/>
          <Route exact path= '/Change/:id' element={<Change/>}/> 
      </Routes>
    </Router>
  );

}
export default App;
