import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CodePage from './components/CodePage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:id" element={<CodePage />} />
      </Routes>
    </div>
  );
}

export default App;
