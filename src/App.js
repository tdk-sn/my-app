import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ZaikoPage from './ZaikoPage';

function App() {
  return (
    <Routes>
      <Route path="/my-app" element={<LoginPage />} />
      <Route path="/zaikopage" element={<ZaikoPage />} />
    </Routes>
  );
}

export default App;
