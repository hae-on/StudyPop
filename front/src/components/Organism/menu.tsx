import React from 'react';
import styled from 'styled-components';
import AddButtonBox from '../Molecule/addButtonBox';
import SubjectList from '../Molecule/subjectList';

const Menu: React.FC = () => (
  <MenuContainer>
    <AddButtonBox />
    <MenuBox>
      <SubjectList />
    </MenuBox>
  </MenuContainer>
);

export default Menu;

const MenuContainer = styled.div`
  margin-left: 3%;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100%;
  background-color: #faf9f9;
`;
