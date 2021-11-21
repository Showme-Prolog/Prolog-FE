import React from 'react';
import { useHistory } from 'react-router';
import font from '@assets/fonts/Font';
import styled from 'styled-components';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import TabBarICon from '@assets/icons/tab-bar-icon.svg';
import IntroCreateIcon from '@assets/icons/pencil-icon.svg';
import SearchIcon from '@assets/icons/search-icon.svg';

const Header = ({ leftComponent, centerComponent, rightComponent, ...props }) => {
  return (
    <RootHeader {...props}>
      <HeaderItem align="left">{leftComponent}</HeaderItem>
      <HeaderItem>{centerComponent}</HeaderItem>
      <HeaderItem align="right">{rightComponent}</HeaderItem>
    </RootHeader>
  );
};

export default Header;

const RootHeader = styled.header`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.Text1_32px}
  &.dim:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(
      to bottom,
      ${color.black},
      ${color.black}b3 70%,
      ${color.black}00
    );
  }
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  justify-content: ${({ align }) => (align ? align : 'center')};
`;

export const HeaderBtn = styled.button`
  position: relative;
  width: 18px;
  height: 18px;
  z-index: 1;
`;

export const UsernameText = styled.h2`
  ${font.Text1_18px}
  color: ${color.white};
`;

export const MainHeader = () => {
  return (
    <Header
      leftComponent={
        <HeaderBtn type="button">
          <Icon src={TabBarICon} />
        </HeaderBtn>
      }
      centerComponent={<UsernameText>Show me</UsernameText>}
      rightComponent={
        <>
          <HeaderBtn type="button">
            <Icon src={IntroCreateIcon} />
          </HeaderBtn>
          <HeaderBtn style={{ marginLeft: '8px' }}>
            <Icon src={SearchIcon} />
          </HeaderBtn>
        </>
      }
    />
  );
};

export const UserDetailHeader = ({ username }) => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <Header
      className="dim"
      leftComponent={
        <HeaderBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </HeaderBtn>
      }
      centerComponent={<UsernameText>{username}</UsernameText>}
    />
  );
};

export const WriteQuestionHeader = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <Header
      leftComponent={
        <HeaderBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </HeaderBtn>
      }
      centerComponent={<UsernameText>그룹명</UsernameText>}
    />
  );
};

export const WriteQuestionModalHeader = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <Header
      leftComponent={
        <HeaderBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </HeaderBtn>
      }
      rightComponent={<UsernameText>저장</UsernameText>}
    />
  );
};
