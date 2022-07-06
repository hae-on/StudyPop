import React, { useRef } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import DropdownInput from '../Atom/dropdownInput';
import Input from '../Atom/input';
import CreateButtonBox from './createButtonBox';

interface subjectType {
  subjects?: {
    id?: number;
    test?: boolean;
    subject?: string;
    subSubjects?: {
      title?: string;
    }[];
  };
}

const SubjectInput: React.FC<subjectType> = () => {
  const subjects = useFetch('http://localhost:3001/subjects');
  const subject = subjects.map((subject) => subject.subject);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // console.log(subjectRef.current.value);
    // console.log(subSubjectRef.current.value);

    if (subject.includes(subjectRef.current.value)) {
      const res = subjects.filter(
        (obj) => obj.subject === subjectRef.current.value,
      );
      const currentSubSubjects = res[0].subSubjects;

      fetch(`http://localhost:3001/subjects/${res[0].id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...res[0],
          subSubjects: [
            ...currentSubSubjects,
            {
              title: subSubjectRef.current.value,
            },
          ],
        }),
      }).then((res) => {
        if (res.ok) {
          console.log('ok');
        }
      });
    } else {
      fetch('http://localhost:3001/subjects/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subjectRef.current.value,
          subSubjects: [
            {
              title: subSubjectRef.current.value,
            },
          ],
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성 완료');
        }
      });
    }
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
