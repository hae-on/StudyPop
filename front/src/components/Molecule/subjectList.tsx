/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import dummy from '../../db/data.json';

const SubjectList = () => {
  console.log(dummy);

  let isEmpty = true;
  if (dummy.subjects.length > 0) {
    isEmpty = false;
  }

  return (
    <ul>
      {isEmpty ? (
        <NoSubject>과목을 생성해주세요</NoSubject>
      ) : (
        dummy.subjects.map((subject) => (
          <SubjectItem key={subject.id}>
            <li key={subject.id}>{subject.subject}</li>
          </SubjectItem>
        ))
      )}
    </ul>
  );
};

export default SubjectList;

const NoSubject = styled.div`
  width: 100%;
  padding: 8%;
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;

const SubjectItem = styled.div`
  color: #58eaac;
  font-size: 1.1rem;
  font-weight: 600;
`;
