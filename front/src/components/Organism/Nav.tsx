import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <>
    <Header>
      <NavLink to="/">
        <Title>STUDY POP</Title>
      </NavLink>
      <Menu>
        <ul>
          <NavLink to="/learning">
            <MenuItem>Learning</MenuItem>
          </NavLink>
          <NavLink to="/testing">
            <MenuItem>Testing</MenuItem>
          </NavLink>
        </ul>
      </Menu>
    </Header>
  </>
);

export default Nav;

const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12%;
  background-color: #58eaac;
  font-family: 'Noto Sans CJK KR';
`;

const Title = styled.p`
  cursor: pointer;
  width: 400px;
  font-weight: 700;
  font-size: 2rem;
  color: white;
`;

const Menu = styled.div`
  margin-right: 20%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-family: 'Noto Sans CJK KR';
  margin-left: 100px;
  font-weight: 600;
  font-size: 1.7rem;
  color: white;
`;
