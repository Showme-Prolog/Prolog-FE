import React from 'react';
import { useHistory } from 'react-router';
import font from '@assets/fonts/Font';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import BackArrowIcon from '@assets/icons/back-arrow.svg';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 53px;
  /* header dim */
  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    margin: 0 0 0 -32px;
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
  justify-content: ${({ align }) => (align ? align : 'center')};
  gap: 8px;
  position: relative;
`;

const UsernameText = styled.h2`
  ${font.Text1_18px}
  color: ${color.white};
`;

const BackBtn = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  z-index: 1;
`;

const DetailHeader = ({ username }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <HeaderWrapper style={{ height: '82px' }}>
      <HeaderItem align="left">
        <BackBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </BackBtn>
      </HeaderItem>
      <HeaderItem>
        <UsernameText align="center">{username}</UsernameText>
      </HeaderItem>
      <HeaderItem></HeaderItem>
    </HeaderWrapper>
  );
};

export default DetailHeader;
