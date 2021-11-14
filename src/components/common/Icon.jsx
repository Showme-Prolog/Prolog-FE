import React from 'react';
import styled from 'styled-components';
import color from '@assets/colors/Color';

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-image: url(${({ src }) => (src ? src : '')});
  background-size: contain;
  &::before {
    content: '';
    background: ${color.icon_linear};
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 22px;
    height: 22px;
    filter: blur(4px);
  }
`;

const Icon = ({ src }) => {
  return <IconWrapper src={src} />;
};

export default Icon;
