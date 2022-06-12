import React from 'react';
import styled from 'styled-components';
import Button from '../Atom/button';

const CreateButtonBox = () => (
  <BtnBox>
    <Button name="생성" color="#58eaac" hoverColor="#47DB94" />
    <Button name="취소" color="#C9CFCC" hoverColor="#939E9D" />
  </BtnBox>
);

export default CreateButtonBox;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 50px;
  margin-top: 7%;
  margin-left: 6%;
`;
