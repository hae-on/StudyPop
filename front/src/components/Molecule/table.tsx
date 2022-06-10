import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Word from '../Atom/wordAndMeaning';

const Table = () => {
  const { subSubject } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/questions?subSubject=${subSubject}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [subSubject]);

  return (
    <>
      <Title> {subSubject}</Title>
      <table>
        <tbody>
          {questions.map((question) => (
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
