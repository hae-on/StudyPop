import React from 'react';
import dummy from '../../db/data.json';

const Table = () => (
  <table>
    <tbody>
      {dummy.questions.map((question) => (
        <tr key={question.id}>
          <td>{question.word}</td>
          <td>{question.meaning}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
