import React from 'react';
import styled from 'styled-components';
import SubjectList from '../Molecule/subjectList';

const Menu: React.FC = () => (
  <MenuBox>
    <SubjectList />
  </MenuBox>
);

export default Menu;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100%;
  background-color: #faf9f9;
  margin-left: 3%;
`;
