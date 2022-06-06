import React from 'react';
import styled from 'styled-components';

interface subSubjectType {
  subSubjects?: {
    title?: string;
  }[];
}

const SubSubject: React.FC<subSubjectType> = ({ subSubjects }) => (
  <>
    {subSubjects ? (
      subSubjects.map((subSubject, index) => (
        <SubsubjectItem key={index}>{subSubject.title}</SubsubjectItem>
      ))
    ) : (
      <p> </p>
    )}
  </>
);

export default SubSubject;

const SubsubjectItem = styled.li`
  margin-top: 3%;
  margin-left: 15px;
  font-weight: 600;
`;
