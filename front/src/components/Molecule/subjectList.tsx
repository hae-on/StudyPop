/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Subject from '../Atom/subject';

const SubjectList: React.FC = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/subjects')
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);

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
