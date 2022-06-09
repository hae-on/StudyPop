import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import dummy from '../../db/data.json';
import Word from '../Atom/wordAndMeaning';

const Table = () => {
  const { subSubject } = useParams();
  const questionList = dummy.questions.filter(
    (question) => question.subSubject === subSubject,
  );

  return (
    <>
      <Title> {subSubject}</Title>
      <table>
        <tbody>
          {questionList.map((question) => (
            <Word question={question} key={question.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

const Title = styled.h2`
  color: #58eaac;
`;
