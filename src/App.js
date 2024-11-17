import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './route/Home';
import Company from './route/Company';
import Post from './route/Post';
import JobDetail from './route/JobDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/post" element={<Post />} />
        <Route path='/job/:id' element={<JobDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
