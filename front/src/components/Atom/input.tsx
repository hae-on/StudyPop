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
      <WholeInput>
        <InputDiv>
          <InputBox type="text" ref={ref}></InputBox>
        </InputDiv>
      </WholeInput>
    </InputContainer>
  ),
);

export default Input;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 3%;
`;

const InputName = styled.label`
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1%;
  margin-top: 1%;
`;

const WholeInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 10px;
  border: 1px solid #4b4b4b;
  border-radius: 3px;
  z-index: 3;

  &:focus-within {
    border: 1px solid #58eaac;
  }
`;

const InputBox = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #4b4b4b;
`;
