import React from 'react';
import styled from 'styled-components';

interface InputType {
  title: string;
}

const Input: React.FC<InputType> = ({ title }) => (
  <InputContainer>
    <InputName>{title} : </InputName>
    <InputBox type="text"></InputBox>
  </InputContainer>
);

export default Input;

const InputContainer = styled.div`
  margin-bottom: 3%;
`;

const InputName = styled.label`
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1%;
`;

const InputBox = styled.input`
  width: 300px;
  height: 30px;
  font-size: 1.1rem;
  padding-left: 10px;

  :focus {
    outline: 1px solid #58eaac;
  }
`;
