import React, { useState, KeyboardEvent, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

interface InputType {
  name: string;
}

const DropdownInput: React.FC<InputType> = ({ name }) => {
  const subjects = useFetch('http://localhost:3001/subjects');
  const subject = subjects.map((subject) => subject.subject);

  const [inputValue, setInputValue] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(subject);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = subject.filter(
        (textItem) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          textItem.includes(inputValue),
        // eslint-disable-next-line function-paren-newline
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem: React.SetStateAction<string>) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event: KeyboardEvent) => {
    if (isHaveInputValue) {
      if (
        // eslint-disable-next-line operator-linebreak
        event.key === 'ArrowDown' &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0) {
        setDropDownItemIndex(dropDownItemIndex - 1);
      }
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <>
      <MajorSubject>
        <InputName>{name}</InputName>
        <WholeSubjectInput>
          <InputBox>
            <Input
              type="text"
              value={inputValue}
              onChange={changeInputValue}
              onKeyUp={handleDropDownKey}
            ></Input>
            <DeleteButton onClick={() => setInputValue('')}>
              &times;
            </DeleteButton>
          </InputBox>
          {isHaveInputValue && (
            <DropDownBox>
              {dropDownList.length === 0 && (
                <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
              )}
              {dropDownList.map((dropDownItem, dropDownIndex) => (
                <DropDownItem
                  key={dropDownIndex}
                  onClick={() => clickDropDownItem(dropDownItem)}
                  onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                  className={
                    dropDownItemIndex === dropDownIndex ? 'selected' : ''
                  }
                >
                  {dropDownItem}
                </DropDownItem>
              ))}
            </DropDownBox>
          )}
        </WholeSubjectInput>
      </MajorSubject>
    </>
  );
};

export default DropdownInput;

const MajorSubject = styled.div`
  display: flex;
  margin-bottom: 3%;
  margin-left: -2%;
`;

const WholeSubjectInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputName = styled.label`
  color: #58eaac;
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1%;
  margin-top: 5px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 10px;
  border: 1px solid #4b4b4b;
  border-radius: 3px;
  z-index: 3;
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #4b4b4b;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const DropDownBox = styled.ul`
  width: 320px;
  padding: 10px 0;
  background-color: white;
  border: 1px solid #4b4b4b;
  border-radius: 0 0 3px 3px;
  border-top: none;
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: #9febcb;
  }
`;
