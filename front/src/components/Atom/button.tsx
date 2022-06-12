import React from 'react';
import styled from 'styled-components';

interface btnType {
  name: string;
  color: string;
  hoverColor?: string;
}

const Button: React.FC<btnType> = ({ name, color, hoverColor }) => (
  <Btn color={color} hoverColor={hoverColor}>
    {name}
  </Btn>
);

export default Button;

const Btn = styled.button<{ hoverColor?: string }>`
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.hoverColor};
    transition: 300ms;
  }
`;
