import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import WordAndMeaning from '../Atom/wordAndMeaning';

const Table = () => {
  const { subSubject } = useParams();
  const questions = useFetch(
    `http://localhost:3001/questions?subSubject=${subSubject}`,
  );

  return (
    <>
      <Title> {subSubject}</Title>
      <table>
        <tbody>
          {questions.map((question) => (
            <WordAndMeaning question={question} key={question.id} />
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
