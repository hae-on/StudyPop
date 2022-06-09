import React from 'react';
import styled from 'styled-components';

const Empty = () => <Title>앗, 잘못된 접근입니다.</Title>;

export default Empty;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #58eaac;
`;
