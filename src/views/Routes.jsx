// src/views/Routes.jsx
import React from 'react'; // React'i import et
import { Routes, Route } from 'react-router-dom';
import HomeView from './HomeView';
import AboutView from './AboutView';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/about" element={<AboutView />} />
  </Routes>
);

export default AppRoutes;