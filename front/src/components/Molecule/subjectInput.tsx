import React, { useRef } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import DropdownInput from '../Atom/dropdownInput';
import Input from '../Atom/input';
import CreateButtonBox from './createButtonBox';

interface subjectType {
  subject?: {
    id?: number;
    subject?: string;
    subSubjects?: {
      title?: string;
    }[];
  };
}

const SubjectInput: React.FC<subjectType> = () => {
  const subjects = useFetch('http://localhost:3001/subjects');
  const subject = subjects.map((subject) => subject.subject);

  console.log(subject);

  // const [subject, setSubject] = useState(s);
  // const [title, setTitle] = useState(subject.subject);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(subjectRef.current.value);
    console.log(subSubjectRef.current.value);

    if (subject.includes(subjectRef.current.value)) {
      console.log('yes');
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

    // fetch(`http://localhost:3001/subjects/${subject.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...subject,

    //   }),
    // }).then((res) => {
    //   if (res.ok) {

    //   }
    // });
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
