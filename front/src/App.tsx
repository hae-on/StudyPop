import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Organism/Nav';
import Info from './components/Page/info';
import Learning from './components/Page/learning';
import Testing from './components/Page/testing';

const App: React.FC = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/testing" element={<Testing />} />
    </Routes>
  </>
);

export default App;
