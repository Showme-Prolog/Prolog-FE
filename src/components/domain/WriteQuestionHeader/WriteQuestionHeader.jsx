import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import font from '@assets/fonts/Font';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import NextArrowIcon from '@assets/icons/next-arrow.svg';

const HeaderWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 87px;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => (align ? align : 'center')};
  gap: 8px;
`;

const UsernameText = styled.h2`
  ${font.Text1_18px}
  color: ${color.white};
`;

const HeaderBtn = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  z-index: 1;
`;

const WriteQuestionHeader = ({ username }) => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <HeaderWrapper>
      <HeaderItem style={{ marginLeft: '9px' }} align="left">
        <HeaderBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </HeaderBtn>
      </HeaderItem>
      <HeaderItem>
        <UsernameText align="center">{username}</UsernameText>
      </HeaderItem>
      <HeaderItem style={{ marginRight: '9px' }} align="right">
        <HeaderBtn type="button" onClick={handleBack}>
          <Icon src={NextArrowIcon} />
        </HeaderBtn>
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default WriteQuestionHeader;
