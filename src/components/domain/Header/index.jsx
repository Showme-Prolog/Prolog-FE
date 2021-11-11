import React from 'react';
import font from '@assets/fonts/Font';
import { ReactComponent as TabBarICon } from '@assets/icons/tab-bar-icon.svg';
import { ReactComponent as IntroCreateIcon } from '@assets/icons/pencil-icon.svg';
import { ReactComponent as SearchIcon } from '@assets/icons/search-icon.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => (align ? align : 'center')};
  gap: 8px;
`;

const HeaderTitle = styled.h1`
  ${font.Display1_Bold}
`;

const iconStyle = {
  width: 16,
  height: 16,
  cursor: 'pointer',
};

const Header = ({ title = 'SOPT' }) => {
  return (
    <HeaderWrapper>
      <HeaderItem align="left">
        <TabBarICon style={iconStyle} />
      </HeaderItem>
      <HeaderItem align="center">
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderItem>
      <HeaderItem align="right">
        <IntroCreateIcon style={iconStyle} />
        <SearchIcon style={iconStyle} />
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default Header;
