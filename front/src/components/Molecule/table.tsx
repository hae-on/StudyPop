import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
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
              <CheckBox>
                <input type="checkbox" />
              </CheckBox>
              <td>{question.word}</td>
              <td>{question.meaning}</td>
              <BtnContainer>
                <TableBtn>
                  <AiOutlineEye />
                </TableBtn>
                <TableBtn>
                  <AiOutlineEye />
                </TableBtn>
                <TableBtn>
                  <FaTrashAlt />
                </TableBtn>
              </BtnContainer>
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

const BtnContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

const TableBtn = styled.button`
  background-color: transparent;
  color: #58eaac;
  font-size: 1.5rem;
`;

const CheckBox = styled.td`
  padding: 0.3em;
  text-align: center;
`;
