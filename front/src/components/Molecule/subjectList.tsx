/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import Subject from '../Atom/subject';

const SubjectList: React.FC = () => {
  const subjects = useFetch('http://localhost:3001/subjects');

  return (
    <SubjectDiv>
      {subjects.length > 0 ? (
        subjects.map((subject) => (
          <SubjectContainer key={subject.id}>
            <Subject subject={subject} />
          </SubjectContainer>
        ))
      ) : (
        <NoSubject>과목을 생성해주세요</NoSubject>
      )}
    </SubjectDiv>
  );
};

export default SubjectList;

const SubjectDiv = styled.ul`
  width: 100%;
`;

const SubjectContainer = styled.div`
  padding-left: 15px;
  &:first-child {
    padding-top: 8%;
  }
`;

const NoSubject = styled.div`
  padding-top: 0;
  padding: 8%;
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;
