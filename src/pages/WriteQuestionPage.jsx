import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import Icon from '@components/common/Icon';
import styled from 'styled-components';
import CreateHeader from '@components/domain/UserCreate/CreateHeader';
import IntroCreateIcon from '@assets/icons/pencil-icon.svg';

const SectionQuestion = styled.section`
  width: 100%;
  padding: 0 6px;
  & + section {
    margin-top: 34px;
  }
`;

const SectionTitle = styled.h2`
  ${font.Text1_14px};
  font-weight: bold;
  color: ${color.white};
  line-height: 16px;
`;

const QuestionList = styled.ul`
  margin: 18px 4px 0;
`;

const QuestionListItem = styled.li`
  display: flex;
  margin-top: 9px;
  &:first-child {
    margin-top: 0;
  }
`;

const QuestionListItemNum = styled.span`
  margin-top: 3px;
  ${font.Text1_14px};
  font-weight: bold;
  color: ${color.white};
  flex: 0;
`;

const QuestionListItemText = styled.input`
  padding: 3px;
  margin: 0 11px 0 3px;
  background: 0;
  border: 0;
  border-bottom: 2px solid #fff;
  ${font.Text1_12px};
  font-weight: bold;
  color: ${color.white};
  flex: 1;
  line-height: 14px;
`;

const QuestionListItemButton = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  background: 0;
  border: 0;

  &:after {
    position: absolute;
    top: 10px;
    left: 5px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    content: '';
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    filter: blur(4px);
    background-image: linear-gradient(134deg, #ff6666 23%, #ffa85f 50%, #ffc629 100%);
    content: '';
  }
`;

const WriteQuestionPage = () => {
  return (
    <>
      <CreateHeader username="최민석" />
      {/* 세부사항 질문 */}
      <SectionQuestion>
        <SectionTitle>세부사항 질문</SectionTitle>
        <QuestionList>
          {/* li 반복 및 추가 */}
          <QuestionListItem>
            <QuestionListItemNum>01</QuestionListItemNum>
            <QuestionListItemText type="text"></QuestionListItemText>
            <QuestionListItemButton></QuestionListItemButton>
          </QuestionListItem>
          <QuestionListItem>
            <QuestionListItemNum>02</QuestionListItemNum>
            <QuestionListItemText type="text"></QuestionListItemText>
            <QuestionListItemButton></QuestionListItemButton>
          </QuestionListItem>
        </QuestionList>
      </SectionQuestion>
      {/* 본질문 */}
      <SectionQuestion>
        <SectionTitle>본 질문</SectionTitle>
        <QuestionList>
          {/* li 반복 및 추가 */}
          <QuestionListItem>
            <QuestionListItemNum>01</QuestionListItemNum>
            <QuestionListItemText type="text"></QuestionListItemText>
            <QuestionListItemButton></QuestionListItemButton>
          </QuestionListItem>
        </QuestionList>
      </SectionQuestion>
    </>
  );
};

export default WriteQuestionPage;
