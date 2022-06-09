import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

interface questionType {
  question: {
    id: number;
    subject: string;
    subSubject: string;
    word: string;
    meaning: string;
    isDone: boolean;
  };
}

const Word: React.FC<questionType> = ({ question }) => {
  const [isWordShow, setIsWordShow] = useState(false);
  const [isMeanShow, setIsMeanShow] = useState(false);

  function toggleWord() {
    setIsWordShow(!isWordShow);
  }

  function toggleMeaning() {
    setIsMeanShow(!isMeanShow);
  }

  return (
    <tr>
      <CheckBox>
        <input type="checkbox" />
      </CheckBox>
      <td>{isWordShow && question.word}</td>
      <td>{isMeanShow && question.meaning}</td>
      <BtnContainer>
        <TableBtn onClick={toggleWord}>
          {isWordShow ? <AiOutlineEye /> : <AiFillEye />}
        </TableBtn>
        <TableBtn onClick={toggleMeaning}>
          {isMeanShow ? <AiOutlineEye /> : <AiFillEye />}
        </TableBtn>
        <TableBtn>
          <FaTrashAlt />
        </TableBtn>
      </BtnContainer>
    </tr>
  );
};

export default Word;

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
