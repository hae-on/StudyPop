import React from 'react';
import styled from 'styled-components';
import Menu from '../Organism/menu';

const Testing = () => (
  <Container>
    <MenuPart>
      <Menu />
    </MenuPart>
    <MainPart></MainPart>
  </Container>
);

export default Testing;

const Container = styled.div`
  flex: 1;
  display: flex;
`;

const MenuPart = styled.div`
  width: 30%;
  margin-left: 50px;
`;
const MainPart = styled.div`
  width: 70%;
`;
