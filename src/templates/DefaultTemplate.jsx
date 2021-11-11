import React, { useEffect, useState } from 'react';
import color from '@assets/colors/Color';
import styled from 'styled-components';
import { BREAKPOINT_PHONE, MediaQueries } from '@utils/MediaQuery';

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  ${MediaQueries(BREAKPOINT_PHONE)} {
    align-items: center;
    flex-direction: column;
    padding: 0 26px;
  }
`;

const DefaultTemplate = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  // 모바일 환경만 처리
  return width < 456 ? (
    <MainWrapper>{children}</MainWrapper>
  ) : (
    '태블릿/데스크탑은 지원하지 않습니다.'
  );
};

export default DefaultTemplate;
