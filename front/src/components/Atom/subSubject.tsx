import React from 'react';

interface subSubjectType {
  subSubjects?: {
    title?: string;
  }[];
}

const SubSubject: React.FC<subSubjectType> = ({ subSubjects }) => (
  <>
    {subSubjects ? (
      subSubjects.map((subSubject, index) => (
        <li key={index}>{subSubject.title}</li>
      ))
    ) : (
      <p> </p>
    )}
  </>
);

export default SubSubject;
