import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Organism/Nav';
import Info from './components/Page/Info';
import Learning from './components/Page/Learning';
import Testing from './components/Page/Testing';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </>
  );
}

export default App;
