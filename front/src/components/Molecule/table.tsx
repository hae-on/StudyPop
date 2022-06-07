import React from 'react';
import dummy from '../../db/data.json';

const Table = () => {
  const subSubject = '데이터베이스 기본';
  const questionList = dummy.questions.filter(
    (question) => question.subSubject === subSubject,
  );

  return (
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
  );
};

export default Table;
