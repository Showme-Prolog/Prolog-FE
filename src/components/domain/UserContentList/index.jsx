import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TopButton } from '@components/common/Button';
import UserContentCard from '../UserContentCard';

const DUMMY_DATA = [
  {
    id: 1,
    username: '최민석',
    src: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9a1ed951-6e2f-45ab-bda8-c5b4e3e2d35c/%EA%B0%95%EC%95%84%EC%A7%80%EC%97%90%EB%AF%B8%EC%B9%9C%EB%86%88%EC%9E%85%EB%8B%88%EB%8B%B9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T051737Z&X-Amz-Expires=86400&X-Amz-Signature=976fcf24d9567886a4922d608641b1791f0e53cc794cd455a1e490f66f3fd4c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B0%2595%25EC%2595%2584%25EC%25A7%2580%25EC%2597%2590%25EB%25AF%25B8%25EC%25B9%259C%25EB%2586%2588%25EC%259E%2585%25EB%258B%2588%25EB%258B%25B9.png%22',
  },
  {
    id: 2,
    username: '조양원',
    src: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a7e8f68-cfd0-408c-b59c-f967b3208a6b/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T052600Z&X-Amz-Expires=86400&X-Amz-Signature=c7498daa7ce63773b849e42f3257640e98a0c18603ddac0067c1d41601f40dfe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2580%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25B71.png%22',
  },
  {
    id: 3,
    username: '이남준',
    src: 'https://picsum.photos/600/600',
  },
  {
    id: 4,
    username: '김민서',
    src: 'https://picsum.photos/400/300',
  },
  {
    id: 5,
    username: '김지수',
    src: 'https://picsum.photos/500/500',
  },
  {
    id: 6,
    username: '하유민',
    src: 'https://picsum.photos/600/700',
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
  data.map(({ username, src, id }) => (
    <Link to={{ pathname: `/user/${id}` }} key={id}>
      <UserContentCard src={src} username={username} key={id} />
    </Link>
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
