import React from 'react';
import { useParams } from 'react-router-dom';
import dummy from '../../db/data.json';

const Table = () => {
  const { subSubject } = useParams();
  const questionList = dummy.questions.filter(
    (question) => question.subSubject === subSubject,
  );

  return (
    <>
      <h2> {subSubject}</h2>
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
