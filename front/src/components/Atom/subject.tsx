import React, { useState } from 'react';
import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdPlayArrow } from 'react-icons/md';
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

const Subject: React.FC<subjectType> = ({ subject }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <SubjectDiv>
      {subject ? (
        <>
          <SubjectItem
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {dropdown ? <TiArrowSortedDown /> : <MdPlayArrow />}
            {subject.subject}
          </SubjectItem>
          <SubSubject subSubjects={subject.subSubjects} dropdown={dropdown} />
        </>
      ) : (
        <p> </p>
      )}
    </SubjectDiv>
  );
};
export default Subject;

const SubjectItem = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #58eaac;
  font-size: 1.2rem;
  font-weight: 700;
`;

const SubjectDiv = styled.div`
  width: 100%;
  margin-left: 2%;
  margin-bottom: 8%;
  color: #58eaac;
`;
