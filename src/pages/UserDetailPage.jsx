import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import color from '@assets/colors/Color';
import ProfileImage from '@components/domain/UserDetail/ProfileImage';
import styled from 'styled-components';

import { TopButton } from '@components/common/Button';
import UserDetailContent from '@components/common/UserDetailContent';
import DetailHeader from '@components/domain/UserDetail/DetailHeader';
import Question from '@components/domain/UserDetail/Question';
import { useSelector } from 'react-redux';
import { fetchIntroduction } from '../redux/introduction';

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
  flex-direction: column;
`;
const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const UserDetailContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 14px 0;
  flex-direction: column;
`;
const moveOnTop = () => (document.documentElement.scrollTop = 0);
const renderDetailContent = ({ detail }) =>
  detail.map((item, index) => <UserDetailContent key={index}>{item.content}</UserDetailContent>);

const UserDetailPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.introduction.introduction);
  const dispatch = useDispatch();

  console.log(data);
  // const introduction = useSelector((state) => state.user.introduction);
  const pageHandler = useSwipeable({
    onSwipedRight: (SwipeEventData) => {
      alert('left');
    },
    onSwipedLeft: (SwipeEventData) => {
      alert('right');
    },
  });

  useEffect(() => {
    dispatch(fetchIntroduction(parseInt(id)));
  }, [dispatch, id]);

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
