import React from 'react';
import styled from 'styled-components';
import Button from '../Atom/button';

const AddButtonBox: React.FC = () => (
  <BtnBox>
    <Button name="문제추가" />
    <Button name="과목추가" />
  </BtnBox>
);

export default AddButtonBox;

const BtnBox = styled.div`
  width: 250px;
  height: 50px;
  margin: 3% 3%;
`;
