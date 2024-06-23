import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ZaikoPage from './ZaikoPage';
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/zaikopage" element={<ZaikoPage />} />
    </Routes>
  );
}

export default App;
