import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Ensure this path is correct

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
