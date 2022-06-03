import React from 'react';
import styled from 'styled-components';

// interface subjectType {
//   subject: string;
// }

const SubjectList = () => <NoSubject>과목을 생성해주세요</NoSubject>;
// :React.FC<subjectType>

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
