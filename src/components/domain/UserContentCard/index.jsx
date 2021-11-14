import React from 'react';
import styled from 'styled-components';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import UserDetailContent from '@components/common/UserDetailContent';

const UserCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  background-color: ${({ src }) => (src ? 'null' : `${color.cheese}`)};
  background-image: ${({ src }) => (src ? `url(${src})` : 'null')};
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px ${color.black_40};
  cursor: pointer;
  &:not(:first-of-type) {
    margin-top: 16px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const UserContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const UserName = styled.h2`
  ${font.Text1_14px}
  color: ${color.white};
  margin-bottom: 4px;
`;

const UserContentCard = ({ src = null, username = '미정', id }) => {
  return (
    <UserCardWrapper src={src} key={id}>
      <UserContentWrapper>
        <UserName>{username}</UserName>
        <UserDetailContent>운영위원회 총무</UserDetailContent>
        <UserDetailContent>치킨을 매우매우매우매우매우 좋아하는 편.</UserDetailContent>
      </UserContentWrapper>
    </UserCardWrapper>
  );
};

export default UserContentCard;
