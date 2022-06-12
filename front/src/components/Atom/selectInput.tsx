import React from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

interface selectType {
  name: string;
}

interface subSubjectType {
  title: string;
}

type Props = selectType | subSubjectType;

const SelectInput: React.FC<Props> = (props) => {
  const { name } = props as selectType;

  const subjects = useFetch('http://localhost:3001/subjects');

  return (
    <div>
      <InputName>{name} : </InputName>
      <SelectBox>
        {subjects.map(
          (subject) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            subject.subSubjects.map(
              (subSubject: subSubjectType, index: number) => (
                <option
                  key={index}
                >{`${subject.subject} - ${subSubject.title}`}</option>
              ),
            ),
          // eslint-disable-next-line function-paren-newline
        )}
      </SelectBox>
    </div>
  );
};

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
