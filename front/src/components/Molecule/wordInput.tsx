import React from 'react';
import styled from 'styled-components';
import Input from '../Atom/input';
import SelectInput from '../Atom/selectInput';

const WordInput: React.FC = () => (
  <InputPart>
    <Input title="단어" />
    <Input title="의미" />
    <SelectInput title="과목" content="정보처리기사" />
  </InputPart>
);
export default WordInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
