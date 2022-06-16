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

// eslint-disable-next-line react/display-name
const SelectInput = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLSelectElement>) => {
    const { name } = props as selectType;

    const subjects = useFetch('http://localhost:3001/subjects');

    return (
      <InputContainer>
        <InputName>{name} : </InputName>
        <WholeInput>
          <InputBox>
            <SelectBox ref={ref}>
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
          </InputBox>
        </WholeInput>
      </InputContainer>
    );
  },
);

export default SelectInput;

const InputContainer = styled.div`
  display: flex;
`;

const InputName = styled.label`
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1%;
`;

const WholeInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 10px;
  border: 1px solid #4b4b4b;
  border-radius: 3px;
  z-index: 3;

  &:focus-within {
    border: 1px solid #58eaac;
    outline: none;
  }
`;

const SelectBox = styled.select`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #4b4b4b;
`;
