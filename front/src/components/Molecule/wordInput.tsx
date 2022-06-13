import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from '../Atom/input';
import SelectInput from '../Atom/selectInput';
import CreateButtonBox from './createButtonBox';

const WordInput: React.FC = () => {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(wordRef.current.value);
    console.log(meanRef.current.value);
    console.log(subjectRef.current.value.split(' - ')[1]);

    fetch('http://localhost:3001/questions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subjectRef.current.value.split(' - ')[0],
        subSubject: subjectRef.current.value.split(' - ')[1],
        word: wordRef.current.value,
        meaning: meanRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성 완료');
      }
    });
  }

  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <InputPart>
        <Input name="단어" ref={wordRef} />
        <Input name="의미" ref={meanRef} />
        <SelectInput name="과목" ref={subjectRef} />
      </InputPart>
      <CreateButtonBox />
    </form>
  );
};

export default WordInput;

const InputPart = styled.div`
  margin-top: 5%;
`;
