import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface subSubjectType {
  subSubjects?: {
    title?: string;
  }[];
}

interface dropDownType {
  dropdown: boolean;
}

type Props = subSubjectType | dropDownType;

const SubSubject: React.FC<Props> = (props) => {
  const { subSubjects } = props as subSubjectType;
  const { dropdown } = props as dropDownType;

  return (
    <>
      {subSubjects ? (
        subSubjects.map((subSubject, index) => (
          <SubsubjectItem key={index} dropdown={dropdown}>
            <Link to={`${subSubject.title}`}>{subSubject.title}</Link>
          </SubsubjectItem>
        ))
      ) : (
        <p> </p>
      )}
    </>
  );
};

export default SubSubject;

const SubsubjectItem = styled.li<dropDownType>`
  margin-top: 3%;
  margin-left: 15px;
  font-weight: 600;
  display: ${(props) => (props.dropdown ? 'block' : 'none')};
`;
