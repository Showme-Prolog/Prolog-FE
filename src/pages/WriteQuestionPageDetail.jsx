import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import styled from 'styled-components';
import { WriteQuestionModalHeader } from '@components/common/Header';
import Icon from '@components/common/Icon';
import BackArrowIcon from '@assets/icons/back-arrow.svg';

// 임시(딤 처리 보이게 하려고)
import WriteQuestionPage from './WriteQuestionPage';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 32px;
  background-color: rgba(56, 59, 63, 0.94);
  z-index: 1000;
`;

const QuestionWrap = styled.div`
  margin: 37px 32px 0 2px;
  display: flex;
`;

const QuestionNum = styled.span`
  ${font.Text1_14px};
  color: ${color.white};
  flex: 0;
`;

const QuestionText = styled.input`
  padding: 0 3px 2px;
  margin-left: 3px;
  background: 0;
  border: 0;
  border-bottom: 2px solid #fff;
  ${font.Text1_12px};
  color: ${color.white};
  flex: 1;
  line-height: 14px;
`;

const AutoQuestionWrap = styled.div`
  margin: 40px 32px 0 0;
`;

const AutoQuestionTitle = styled.h2`
  color: ${color.white};
  ${font.Text1_14px};
`;

const AutoQuestionList = styled.ul`
  margin: 12px 0 0 22px;
  overflow: auto;
`;

const AutoQuestionListItem = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

const AutoQuestionListItemCopy = styled.a`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${color.white};
  ${font.Text1_12px};
  line-height: 14px;
  text-align: left;
  text-overflow: ellipsis;
  max-height: 28px;
  word-break: break-word;
`;

const WriteQuestionPageDetail = () => {
  return (
    <>
      <WriteQuestionPage />
      <ModalWrap>
        <WriteQuestionModalHeader />
        <QuestionWrap>
          <QuestionNum>01</QuestionNum>
          <QuestionText type="text" />
        </QuestionWrap>
        <AutoQuestionWrap>
          <AutoQuestionTitle>질문 예시</AutoQuestionTitle>
          <AutoQuestionList>
            <AutoQuestionListItem>
              <AutoQuestionListItemCopy>a태그입니다 누르면 복사되야함</AutoQuestionListItemCopy>
            </AutoQuestionListItem>
            <AutoQuestionListItem>
              <AutoQuestionListItemCopy>
                샘플예시 입니다. 샘플예시 입니다. 샘플예시 입니다. 샘플예시 입니다. 샘플예시 입니다.
                샘플예시 입니다. 샘플예시 입니다. 샘플예시 입니다.
              </AutoQuestionListItemCopy>
            </AutoQuestionListItem>
            <AutoQuestionListItem>
              <AutoQuestionListItemCopy>
                연결된영어텍스트도문제없이나타남contratulationscontratulationscontratulationscontratulationscontratulationscontratulations
              </AutoQuestionListItemCopy>
            </AutoQuestionListItem>
          </AutoQuestionList>
        </AutoQuestionWrap>
      </ModalWrap>
    </>
  );
};

export default WriteQuestionPageDetail;
