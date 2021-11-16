import React, { useState, useEffect } from 'react';
import UserContentList from '@components/domain/UserContentList';
import MainHeader from '@components/domain/MainHeader';
import { getIntroductionList } from '@api/IntroductionApi';

const MainPage = () => {
  const [userContentList, setUserContentList] = useState([]);

  useEffect(async () => {
    const response = await getIntroductionList();
    console.log(response);
    // const userContentList = await response.json();
    // setUserContentList(userContentList);
  }, []);

  return (
    <>
      <MainHeader />
      <UserContentList />
    </>
  );
};

export default MainPage;
