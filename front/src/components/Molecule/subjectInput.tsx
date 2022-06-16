import React, { useRef } from 'react';
import styled from 'styled-components';
import DropdownInput from '../Atom/dropdownInput';
import Input from '../Atom/input';
import CreateButtonBox from './createButtonBox';

const SubjectInput: React.FC = () => {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(subjectRef.current.value);
    console.log(subSubjectRef.current.value);

    fetch('http://localhost:3001/subjects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subjectRef.current.value,
        subSubject: subSubjectRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성 완료');
      }
    });
  }

  const subjectRef = useRef<HTMLInputElement>(null);
  const subSubjectRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <InputPart>
        <DropdownInput name="대과목 :" ref={subjectRef} />
        <Input name="과목 " ref={subSubjectRef} />
      </InputPart>
      <CreateButtonBox />
    </form>
  );
};

export default SubjectInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
