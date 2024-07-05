// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Airports from './components/Airports';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/home" element={<div><h1>Home</h1></div>} />
            <Route path="/dashboard" element={<div><h1>Dashboard</h1></div>} />
            <Route path="/services" element={<div><h1>Services</h1></div>} />
            <Route path="/airports" element={<Airports />} />
            <Route path="/link1" element={<div><h1>Link1</h1></div>} />
            <Route path="/link2" element={<div><h1>Link2</h1></div>} />
            <Route path="/link3" element={<div><h1>Link3</h1></div>} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
