import React, { useCallback } from 'react';
import styled from 'styled-components';

import font from '@assets/fonts/Font';
import color from '@assets/colors/Color';

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.white};
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.white};
  margin-bottom: 16px;
`;

const QuestionText = styled.h3`
  ${font.Text1_14px}
  margin-bottom: 4px;
`;

const AnswerText = styled.p`
  ${font.Text2_11px}
`;

const Question = ({ question }) => {
  const renderQuestion = useCallback(
    (question) =>
      question.map((item, index) => (
        <QuestionBox key={index}>
          <QuestionText>
            Q{index + 1}. {item.Q}
          </QuestionText>
          <AnswerText>{item.A}</AnswerText>
        </QuestionBox>
      )),
    [question],
  );

  return <QuestionWrapper>{renderQuestion(question)}</QuestionWrapper>;
};

export default Question;
