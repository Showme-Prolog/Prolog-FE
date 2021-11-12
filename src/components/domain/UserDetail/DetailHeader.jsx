import React from 'react';
import { useHistory } from 'react-router';
import font from '@assets/fonts/Font';
import color from '@assets/colors/Color';
import { ReactComponent as BackArrowIcon } from '@assets/icons/back-arrow.svg';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 53px;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => (align ? align : 'center')};
  gap: 8px;
`;

const UsernameText = styled.h2`
  ${font.Display1_Bold}
  color: ${color.white};
`;

const DetailHeader = ({ username }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <HeaderWrapper>
      <HeaderItem style={{ marginLeft: '9px' }} align="left">
        <BackArrowIcon onClick={handleBack} />
      </HeaderItem>
      <HeaderItem>
        <UsernameText align="center">{username}</UsernameText>
      </HeaderItem>
      <HeaderItem></HeaderItem>
    </HeaderWrapper>
  );
};

export default DetailHeader;
