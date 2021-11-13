import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import { ReactComponent as TopArrowIcon } from '@assets/icons/top-arrow.svg';
import styled from 'styled-components';

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const Button = ({ ...rest }) => <Root type="button" {...rest} />;

export default Button;

const TopRoot = styled(Root)`
  width: ${({ size }) => (size ? `${size}px` : '44px')};
  height: 44px;
  border-radius: 50%;
  background-color: ${color.grey500};
  box-shadow: 0px 4px 4px 0px ${color.black_40};
`;

const TopIconStyle = {
  width: '24px',
  height: '24px',
};

export const TopButton = ({ ...rest }) => (
  <TopRoot type="button" {...rest}>
    <TopArrowIcon style={TopIconStyle} />
  </TopRoot>
);

const CompleteRoot = styled(Root)`
  color: ${color.white};
  background-color: ${color.grey500};
  ${font.Text3_Regular}
`;

export const CompleteButton = ({ text, ...rest }) => (
  <CompleteRoot type="submit" {...rest}>
    {text}
  </CompleteRoot>
);
