import React, { useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import styled from 'styled-components';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import { ReactComponent as CameraIcon } from '@assets/icons/design-camera.svg';
import { TopButton } from '@components/common/Button';
import CreateHeader from '@components/domain/UserCreate/CreateHeader';
import { DetailQuestionInput, QuestionInput } from '@components/common/Input';

const UserCreateWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 17px 0;
  border-radius: 15px;
  flex-direction: column;
  background-color: ${color.cheese};
`;
const InnerWrapper = styled.div`
  width: 100%;
  padding: 0 21px;
  margin: 0 auto;
`;

const DragDropInput = styled.input`
  display: none;
`;

const DragDropLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 300px;
  transition: 0.3s ease-in;
  background-color: ${color.cheese};
  border-radius: 15px;
  &:active {
    background-color: ${color.cheese};
  }
`;

const UserCreateContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 18px;
  flex-direction: column;
`;
const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.white};
  margin-bottom: 16px;
`;
const QuestionText = styled.h3`
  ${font.Text1_14px}
  margin-bottom: 5px;
`;

const Form = styled.form`
  width: 100%;
`;

const DUMMY_DATA = {
  detail: [
    {
      Q: '학년과 생년월일이 궁금해요!',
    },
    {
      Q: '전공이 무엇인가요?',
    },
    {
      Q: '본인의 역할은 무엇인가요?',
    },
  ],
  question: [
    {
      Q: '무슨 공부를 좋아하세요?',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
    },
    {
      Q: '무슨 공부를 좋아하세요?',
    },
  ],
};

const UserCreatePage = () => {
  const { id } = useParams();
  const { handleSubmit, register, errors } = useForm();
  const InputRef = useRef(null);

  const renderDetailQuestionInput = useCallback(
    (detail) =>
      detail.map((item, index) => <DetailQuestionInput key={index} placeholder={item.Q} />),
    [],
  );
  const renderQuestionInput = useCallback(
    (question) =>
      question.map((item, index) => (
        <QuestionBox key={index}>
          <QuestionText>
            Q{index + 1}.{item.Q}
          </QuestionText>
          <QuestionInput key={index} placeholder="작성해주세요." />
        </QuestionBox>
      )),
    [],
  );
  const moveOnTop = () => (document.documentElement.scrollTop = 0);
  return (
    <>
      <UserCreateWrapper>
        <Form onSubmit={handleSubmit()}>
          <CreateHeader username="최민석" />
          <InnerWrapper>
            <DragDropInput id="fileUpload" type="file" name="file" accept="image/png, image/jpeg" />
            <DragDropLabel htmlFor="fileUpload">
              <CameraIcon />
            </DragDropLabel>
            <UserCreateContentWrapper>
              {renderDetailQuestionInput(DUMMY_DATA.detail)}
            </UserCreateContentWrapper>
            {renderQuestionInput(DUMMY_DATA.question)}
          </InnerWrapper>
        </Form>
      </UserCreateWrapper>
      <TopButton style={{ marginBottom: '20px' }} onClick={moveOnTop} />
    </>
  );
};

export default UserCreatePage;
