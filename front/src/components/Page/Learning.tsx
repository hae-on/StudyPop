import React from 'react';
import styled from 'styled-components';
import Menu from '../Organism/menu';
import Table from '../Molecule/table';

const Learning = () => (
  <Container>
    <MenuPart>
      <Menu />
    </MenuPart>
    <MainPart>
      <Table />
    </MainPart>
  </Container>
);

export default Learning;

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
