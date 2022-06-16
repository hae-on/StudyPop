import React from 'react';
import styled from 'styled-components';
import DropdownInput from '../Atom/dropdownInput';
import Input from '../Atom/input';
import CreateButtonBox from './createButtonBox';

const SubjectInput: React.FC = () => {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <InputPart>
        <DropdownInput name="대과목 :" />
        <Input name="과목 " />
      </InputPart>
      <CreateButtonBox />
    </form>
  );
};

export default SubjectInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
