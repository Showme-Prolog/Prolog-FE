import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import font from '@assets/fonts/Font';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import { CompleteButton } from '@components/common/Button';

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
    <HeaderWrapper>
      <HeaderItem style={{ marginLeft: '9px' }} align="left">
        <BackBtn type="button" onClick={handleBack}>
          <Icon src={BackArrowIcon} />
        </BackBtn>
      </HeaderItem>
      <HeaderItem>
        <UsernameText align="center">{username}</UsernameText>
      </HeaderItem>
      <HeaderItem style={{ marginRight: '9px' }} align="right">
        <CompleteButton text="완료" disabled />
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default DetailHeader;
