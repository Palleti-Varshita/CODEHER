import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Ensure this path is correct

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'

// This is the ID of the div in your index.html file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);