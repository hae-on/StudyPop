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

const WordAndMeaning: React.FC<questionType> = ({ question: q }) => {
  const [question, setQuestion] = useState(q);
  const [isWordShow, setIsWordShow] = useState(true);
  const [isMeanShow, setIsMeanShow] = useState(true);
  const [isDone, setIsDone] = useState(question.isDone);

  function toggleWord() {
    setIsWordShow(!isWordShow);
  }

  function toggleMeaning() {
    setIsMeanShow(!isMeanShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/questions/${question.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...question,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    // eslint-disable-next-line no-alert
    if (window.confirm('정말 삭제하시나요?')) {
      fetch(`http://localhost:3001/questions/${question.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setQuestion({
            ...question,
            id: 0,
          });
        }
      });
    }
  }

  if (question.id === 0) {
    return null;
  }

  return (
    <tr>
      <CheckBox className={isDone ? 'off' : ''}>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </CheckBox>
      <TableTd className={isDone ? 'off' : ''}>
        {isWordShow && question.word}
      </TableTd>
      <TableTd className={isDone ? 'off' : ''}>
        {isMeanShow && question.meaning}
      </TableTd>
      <BtnContainer>
        <TableBtn onClick={toggleWord}>
          {isWordShow ? <AiOutlineEye /> : <AiFillEye />}
        </TableBtn>
        <TableBtn onClick={toggleMeaning}>
          {isMeanShow ? <AiOutlineEye /> : <AiFillEye />}
        </TableBtn>
        <TableBtn onClick={del}>
          <FaTrashAlt />
        </TableBtn>
      </BtnContainer>
    </tr>
  );
};

export default WordAndMeaning;

const CheckBox = styled.td`
  padding: 0.3em;
  text-align: center;
  &.off {
    background: #eee;
    color: #321a1a;
  }
`;

const TableTd = styled.td`
  &.off {
    background: #eee;
    color: #321a1a;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

const TableBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #58eaac;
  font-size: 1.5rem;
`;
