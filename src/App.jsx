import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Landingpage from './components/Landingpage';
import FeaturedGrid from './components/FeaturedGrid';
import './App.css';

function AppWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FeaturedGrid />} />
        <Route path="/events" element={<Landingpage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
