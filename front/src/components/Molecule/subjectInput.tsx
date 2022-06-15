import React from 'react';
import styled from 'styled-components';
import DropdownInput from '../Atom/dropdownInput';

const SubjectInput: React.FC = () => (
  <InputPart>
    <DropdownInput name="대과목 :" />
  </InputPart>
);

export default SubjectInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
