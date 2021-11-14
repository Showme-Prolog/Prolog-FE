import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useParams } from 'react-router';
import color from '@assets/colors/Color';
import Icon from '@components/common/Icon';
import ProfileImage from '@components/domain/UserDetail/ProfileImage';
import styled from 'styled-components';

import { TopButton } from '@components/common/Button';
import UserDetailContent from '@components/common/UserDetailContent';
import DetailHeader from '@components/domain/UserDetail/DetailHeader';
import Question from '@components/domain/UserDetail/Question';

// const DUMMY_DATA = {
//   username: '유저이름',
//   profile: 'https://picsum.photos/900/800',
//   detail: [
//     {
//       content: '저는 공부를 좋아해요.',
//     },
//     {
//       content: '저는 공부를 좋아해요.',
//     },
//     {
//       content: '저는 공부를 좋아해요.',
//     },
//   ],
//   question: [
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//     {
//       Q: '무슨 공부를 좋아하세요?',
//       A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
//     },
//   ],
// };

const SectionQuestion = styled.section`
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
  margin-top: 18px;
`;

const QuestionListItem = styled.li`
  display: flex;
  margin-top: 9px;
  &:first-child {
    margin-top: 0;
  }
`;

const QuestionListItemNum = styled.span`
  margin: 3px 3px 0 0;
  ${font.Text1_14px};
  font-weight: bold;
  color: ${color.white};
  flex: 0;
`;

const QuestionListItemText = styled.input`
  padding-top: 3px;
  border-bottom: 1.5px;
  ${font.Text1_12px};
  font-weight: bold;
  color: ${color.white};
`;

const QuestionListItemButton = styled.button`
  width: 22px;
  height: 22px;
`;

const WriteQuestionPage = () => {
  return (
    <>
      {/* 세부사항 질문 */}
      <SectionQuestion>
        <SectionTitle>세부사항 질문</SectionTitle>
        <QuestionList>
          {/* li 반복 및 추가 */}
          <QuestionListItem>
            <QuestionListItemNum>01</QuestionListItemNum>
            <QuestionListItemText>작성되면 이 느낌</QuestionListItemText>
            <QuestionListItemButton>제거버튼</QuestionListItemButton>
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
            <QuestionListItemText>작성되면 이 느낌</QuestionListItemText>
            <QuestionListItemButton>제거버튼</QuestionListItemButton>
          </QuestionListItem>
        </QuestionList>
      </SectionQuestion>
    </>
  );
};

export default WriteQuestionPage;
