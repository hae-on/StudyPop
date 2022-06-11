import React from 'react';
import styled from 'styled-components';

interface selectType {
  title: string;
  content: string;
}

const SelectInput: React.FC<selectType> = ({ title, content }) => (
  <div>
    <InputName>{title} : </InputName>
    <SelectBox>
      <option>{content}</option>
      <option>SQL</option>
    </SelectBox>
  </div>
);

export default SelectInput;

const InputName = styled.label`
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1%;
`;

const SelectBox = styled.select`
  width: 318px;
  height: 36px;
  font-size: 1.1rem;
  padding-left: 10px;
`;
