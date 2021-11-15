import React from 'react';
import { Link } from 'react-router-dom';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import font from '@assets/fonts/Font';
import TabBarICon from '@assets/icons/tab-bar-icon.svg';
import IntroCreateIcon from '@assets/icons/pencil-icon.svg';
import SearchIcon from '@assets/icons/search-icon.svg';
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
  ${font.Text1_18px};
  color: ${color.white};
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-weight: bold;
`;

const HeaderMenuBtn = styled.button`
  width: 22px;
  height: 22px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const MainHeader = ({ title = 'SOPT' }) => {
  return (
    <HeaderWrapper>
      <HeaderItem align="left">
        <HeaderMenuBtn type="button">
          <Icon src={TabBarICon} />
        </HeaderMenuBtn>
      </HeaderItem>
      <HeaderItem align="center">
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderItem>
      <HeaderItem align="right">
        <HeaderMenuBtn type="button" to={{ pathname: `/user/create` }}>
          <Icon src={IntroCreateIcon} />
        </HeaderMenuBtn>
        <HeaderMenuBtn type="button">
          <Icon src={SearchIcon} />
        </HeaderMenuBtn>
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default MainHeader;
