import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import dummy from '../../db/data.json';

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
            <tr key={question.id}>
              <td>{question.word}</td>
              <td>{question.meaning}</td>
            </tr>
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
