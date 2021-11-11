import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0 26px;
`;

const DefaultTemplate = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default DefaultTemplate;
