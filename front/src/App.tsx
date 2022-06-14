import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Organism/Nav';
import CreateSubject from './components/Page/createSubject';
import CreateWord from './components/Page/createWord';
import Empty from './components/Page/empty';
import Info from './components/Page/info';
import Learning from './components/Page/learning';
import Testing from './components/Page/testing';

const App: React.FC = () => (
  <>
    <Nav />
    <HomeSection>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/learning/*" element={<Learning />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_subject" element={<CreateSubject />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </HomeSection>
  </>
);

export default App;

const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 130px;
`;
