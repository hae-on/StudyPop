import React from 'react';
import styled from 'styled-components';

interface InputType {
  name: string;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  ({ name }: InputType, ref?: React.Ref<HTMLInputElement>) => (
    <InputContainer>
      <InputName>{name} : </InputName>
      <InputBox type="text" ref={ref}></InputBox>
    </InputContainer>
  ),
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
