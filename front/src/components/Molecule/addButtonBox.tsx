import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Atom/button';

const AddButtonBox: React.FC = () => (
  <BtnBox>
    <Link to="/create_word">
      <Button name="문제추가" color="#58eaac" />
    </Link>
    <Button name="과목추가" color="#58eaac" />
  </BtnBox>
);

export default AddButtonBox;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 50px;
  margin-bottom: 5%;
`;
