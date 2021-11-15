import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import styled from 'styled-components';
import { ReactComponent as BackArrowIcon } from '@assets/icons/back-arrow.svg';

// 임시(딤 처리 보이게 하려고)
import WriteQuestionPage from './WriteQuestionPage';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 32px;
  background-color: rgba(56, 59, 63, 0.94);
`;

const WriteQuestionPageDetail = () => {
  return (
    <>
      <WriteQuestionPage />
      <ModalWrap>
        <BackArrowIcon />
      </ModalWrap>
    </>
  );
};

export default WriteQuestionPageDetail;
