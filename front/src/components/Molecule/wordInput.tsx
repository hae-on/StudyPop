import React from 'react';
import styled from 'styled-components';
import Input from '../Atom/input';
import SelectInput from '../Atom/selectInput';

const WordInput: React.FC = () => (
  <InputPart>
    <Input title="단어" />
    <Input title="의미" />
    <SelectInput name="과목" />
  </InputPart>
);
export default WordInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
