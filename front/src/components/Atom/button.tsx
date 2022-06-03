import React from 'react';
import styled from 'styled-components';

interface btnType {
  name: string;
}

const Button: React.FC<btnType> = ({ name }) => <Btn>{name}</Btn>;

export default Button;

const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: #58eaac;
  color: white;
  font-size: 1.1rem;
  border-radius: 5px;
  margin-right: 10%;
`;
