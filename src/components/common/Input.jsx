import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import styled from 'styled-components';

const Root = styled.textarea`
  width: 100%;
  ${font.Text2_12px}
  border: none;
  text-decoration: none;
  background-color: inherit;
  resize: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${color.orange};
  }
`;

const Input = ({ ...rest }) => <Root type="text" {...rest} />;

export default Input;

const DetailQuestionRoot = styled.input`
  ${font.Text2_11px}
  width: 100%;
  border: none;
  text-decoration: none;
  background-color: inherit;
  color: ${color.white};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${color.orange};
  }
  &::-webkit-input-placeholder {
    color: ${color.white};
  }
  &::-moz-placeholder {
    color: ${color.white};
  }
  &:-ms-input-placeholder {
    color: ${color.white};
  }
  &:-moz-placeholder {
    color: ${color.white};
  }
  &::placeholder {
    color: ${color.white};
  }
`;

const QuestionRoot = styled(Root)`
  ${font.Text2_12px}
  color: ${color.white};
  &::-webkit-input-placeholder {
    color: ${color.white};
  }
  &::-moz-placeholder {
    color: ${color.white};
  }
  &:-ms-input-placeholder {
    color: ${color.white};
  }
  &:-moz-placeholder {
    color: ${color.white};
  }
  &::placeholder {
    color: ${color.white};
  }
`;

export const QuestionInput = ({ ...rest }) => <QuestionRoot type="text" {...rest} />;
export const DetailQuestionInput = ({ ...rest }) => <DetailQuestionRoot type="text" {...rest} />;
