import React from 'react';
import styled from 'styled-components';
import SubSubject from './subSubject';

interface subjectType {
  subject?: {
    id?: number;
    subject?: string;
    subSubjects?: {
      title?: string;
    }[];
  };
}

const Subject: React.FC<subjectType> = ({ subject }) => (
  <SubjectDiv>
    {subject ? (
      <>
        <SubjectItem>
          <li>{subject.subject}</li>
        </SubjectItem>
        <SubSubject subSubjects={subject.subSubjects} />
      </>
    ) : (
      <p> </p>
    )}
  </SubjectDiv>
);
export default Subject;

const SubjectItem = styled.div`
  color: #58eaac;
  font-size: 1.2rem;
  font-weight: 700;
`;

const SubjectDiv = styled.div`
  width: 100%;
  margin-left: 5%;
  margin-bottom: 10%;
  color: #58eaac;
`;
