/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import dummy from '../../db/data.json';
import Subject from '../Atom/subject';

const SubjectList: React.FC = () => (
  <SubjectDiv>
    {dummy.subjects.length > 0 ? (
      dummy.subjects.map((subject) => (
        <Subject subject={subject} key={subject.id}></Subject>
      ))
    ) : (
      <NoSubject>과목을 생성해주세요</NoSubject>
    )}
  </SubjectDiv>
);

export default SubjectList;

const SubjectDiv = styled.ul`
  width: 100%;
`;

const NoSubject = styled.div`
  padding: 8%;
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;
