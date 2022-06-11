import React from 'react';
import styled from 'styled-components';
import WordInput from '../Molecule/wordInput';
import Menu from '../Organism/menu';

const CreateWord: React.FC = () => (
  <Container>
    <MenuPart>
      <Menu />
    </MenuPart>
    <MainPart>
      <Title>새로운 문제를 추가해보세요</Title>
      <WordInput />
    </MainPart>
  </Container>
);

export default CreateWord;

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

const Title = styled.h1`
  color: #58eaac;
`;
