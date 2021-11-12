import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useParams } from 'react-router';
import color from '@assets/colors/Color';
import ProfileImage from '@components/domain/UserDetail/ProfileImage';
import styled from 'styled-components';

import { TopButton } from '@components/common/Button';
import UserDetailContent from '@components/common/UserDetailContent';
import DetailHeader from '@components/domain/UserDetail/DetailHeader';
import Question from '@components/domain/UserDetail/Question';

const DUMMY_DATA = {
  username: '유저이름',
  profile: 'https://picsum.photos/900/800',
  detail: [
    {
      content: '저는 공부를 좋아해요.',
    },
    {
      content: '저는 공부를 좋아해요.',
    },
    {
      content: '저는 공부를 좋아해요.',
    },
  ],
  question: [
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
      A: 'Lorem ipsum dolor sit met, consectetur adipiscing elit. Sem nisi, congue bibendum elementum, feugiat fermentum donec justo. Curabitur interdum aliquet scelerisque senectus pellentesque mauris.',
    },
  ],
};

const UserDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 17px 0;
  border-radius: 15px;
  flex-direction: column;
  background-color: ${color.grey500};
`;
const InnerWrapper = styled.div`
  width: 100%;
  padding: 0 21px;
  margin: 0 auto;
`;

const UserDetailContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 18px;
  flex-direction: column;
`;
const moveOnTop = () => (document.documentElement.scrollTop = 0);
const renderDetailContent = ({ detail }) =>
  detail.map((item, index) => <UserDetailContent key={index}>{item.content}</UserDetailContent>);

const UserDetailPage = () => {
  const { id } = useParams();

  const pageHandler = useSwipeable({
    onSwipedRight: (SwipeEventData) => {
      alert('left');
    },
    onSwipedLeft: (SwipeEventData) => {
      alert('right');
    },
  });

  return (
    <>
      <UserDetailWrapper {...pageHandler}>
        <DetailHeader username={DUMMY_DATA.username} />
        <InnerWrapper>
          <ProfileImage src={DUMMY_DATA.profile} />
          <UserDetailContentWrapper>{renderDetailContent(DUMMY_DATA)}</UserDetailContentWrapper>
          <Question question={DUMMY_DATA.question} />
        </InnerWrapper>
      </UserDetailWrapper>
      <TopButton style={{ marginBottom: '20px' }} onClick={moveOnTop} />
    </>
  );
};

export default UserDetailPage;
