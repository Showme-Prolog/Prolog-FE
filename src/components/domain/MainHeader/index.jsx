import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/common/Icon';
import font from '@assets/fonts/Font';
import { ReactComponent as TabBarICon } from '@assets/icons/tab-bar-icon.svg';
import IntroCreateIcon from '@assets/icons/pencil-icon.svg';
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
  ${font.Text1_18px}
`;

const iconStyle = {
  width: 16,
  height: 16,
  cursor: 'pointer',
};

const MainHeader = ({ title = 'SOPT' }) => {
  return (
    <HeaderWrapper>
      <HeaderItem align="left">
        <TabBarICon style={iconStyle} />
      </HeaderItem>
      <HeaderItem align="center">
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderItem>
      <HeaderItem align="right">
        <Link to={{ pathname: `/user/create` }}>
          <Icon src={IntroCreateIcon} />
        </Link>
        <SearchIcon style={iconStyle} />
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default MainHeader;
