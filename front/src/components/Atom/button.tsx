import React from 'react';
import styled from 'styled-components';

interface btnType {
  name: string;
  color: string;
}

const Button: React.FC<btnType> = ({ name, color }) => (
  <Btn color={color}>{name}</Btn>
);

export default Button;

const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.color};
  /* background-color: #58eaac; */
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
`;
