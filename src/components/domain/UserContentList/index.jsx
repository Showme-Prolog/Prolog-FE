import React from 'react';
import styled from 'styled-components';
import { TopButton } from '@components/common/Button';
import UserContentCard from '../UserContentCard';

const DUMMY_DATA = [
  {
    username: '최민석',
    src: 'https://picsum.photos/600/800',
  },
  {
    username: '김민서',
    src: 'https://picsum.photos/800/800',
  },
  {
    username: '이남준',
    src: 'https://picsum.photos/900/800',
  },
  {
    username: '조양원',
    src: 'https://picsum.photos/1000/800',
  },
  {
    username: '최민석',
    src: 'https://picsum.photos/600/800',
  },
  {
    username: '김민서',
    src: 'https://picsum.photos/800/800',
  },
  {
    username: '이남준',
    src: 'https://picsum.photos/900/800',
  },
  {
    username: '조양원',
    src: 'https://picsum.photos/1000/800',
  },
];

const UserContentListWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const TopButtonWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const renderUserContentCard = (data) =>
  data.map(({ username, src }, index) => (
    <UserContentCard key={index} src={src} username={username} />
  ));

const moveOnTop = () => (document.documentElement.scrollTop = 0);
const UserContentList = () => {
  return (
    <>
      <UserContentListWrapper>
        {renderUserContentCard(DUMMY_DATA)}
        {DUMMY_DATA.length > 6 && (
          <TopButtonWrapper>
            <TopButton onClick={moveOnTop} />
          </TopButtonWrapper>
        )}
      </UserContentListWrapper>
    </>
  );
};

export default UserContentList;
