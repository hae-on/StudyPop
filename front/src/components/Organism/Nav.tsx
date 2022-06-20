import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Location, useLocation } from 'react-router';

const Nav = () => {
  const location = useLocation();

  // eslint-disable-next-line consistent-return
  const activeTab = (location: Location, path: string) => {
    if (location.pathname.startsWith(path)) {
      return {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
        color: 'white',
      };
    }
  };

  return (
    <>
      <Header>
        <StyledLink to="/">
          <Title>STUDY POP</Title>
        </StyledLink>
        <Menu>
          <ul>
            <StyledLink to="/learning" style={activeTab(location, '/learning')}>
              <MenuItem>Learning</MenuItem>
            </StyledLink>
            <StyledLink to="/testing" style={activeTab(location, '/testing')}>
              <MenuItem>Testing</MenuItem>
            </StyledLink>
          </ul>
        </Menu>
      </Header>
    </>
  );
};

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
  margin-left: 10%;
  white-space: nowrap;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
