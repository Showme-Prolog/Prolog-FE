import React from 'react';
import styled from 'styled-components';
import color from '@assets/colors/Color';

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-image: url(${({ src }) => (src ? src : '')});
  background-size: contain;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: ${({ bgColor }) => (bgColor === 'none' ? 'none' : color.white)};
    content: '';
    z-index: -1;
  }
`;

const Icon = ({ src, color = 'none' }) => {
  return <IconWrapper src={src} bgColor={color} />;
};

export default Icon;
