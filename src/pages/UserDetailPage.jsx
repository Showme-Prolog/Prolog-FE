import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useParams } from 'react-router';
import color from '@assets/colors/Color';
import ProfileImage from '@components/domain/UserDetail/ProfileImage';
import styled from 'styled-components';

import { TopButton } from '@components/common/Button';
import UserDetailContent from '@components/common/UserDetailContent';
import DetailHeader from '@components/domain/UserDetail/DetailHeader';
import Question from '@components/domain/UserDetail/Question';

const DUMMY_DATA = [
  {
    id: 1,
    username: '최민석',
    profile:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9a1ed951-6e2f-45ab-bda8-c5b4e3e2d35c/%EA%B0%95%EC%95%84%EC%A7%80%EC%97%90%EB%AF%B8%EC%B9%9C%EB%86%88%EC%9E%85%EB%8B%88%EB%8B%B9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T051737Z&X-Amz-Expires=86400&X-Amz-Signature=976fcf24d9567886a4922d608641b1791f0e53cc794cd455a1e490f66f3fd4c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B0%2595%25EC%2595%2584%25EC%25A7%2580%25EC%2597%2590%25EB%25AF%25B8%25EC%25B9%259C%25EB%2586%2588%25EC%259E%2585%25EB%258B%2588%25EB%258B%25B9.png%22',
    detail: [
      {
        content: '컴퓨터소프트웨어공학과 16학번',
      },
      {
        content: 'FE 개발자 희망',
      },
    ],
    question: [
      {
        Q: '🖐🏻 이름 / 나이 / 전공',
        A: '안녕하세요! 25살 막 학기 순천향대 컴퓨터소프트웨어공학과 재학 중인 최민석입니다 🙂 취업 준비를 하면서 프로그래머스 프론트엔드 데브코스에 참여중입니다. ⚡ 단추, 땅콩이라는 12살, 13살 한창 아기를 키우고 있습니다 😍 \n 팀플 이후, 기억 남는 개발자가 되는 것으로 프론트엔드 개발자가 목표입니다 😎 \n 해커톤 및 대외 활동을 즐겨하면서 지식 공유를 취미로 합니다 ☺ \n LOL도 좋아하고.. 그냥 게임을 좋아합니다 😇 \n 여러 사람들과 대화를 하며 지식과 회고로 스트레스를 풀어요 🥰',
      },
      {
        Q: '🔎 MBTI → 제 성격은요!',
        A: 'ENTJ로 사람들과 진정성 있는 인간 관계 형성을 위해서 많은 소통을 좋아합니다.. \n 자칫 잘못하면 히틀러가 될 수도 있다하는데.. 조심하겠습니다 ^-^ㅋ',
      },
      {
        Q: '🔥 요새 푹 빠진 것이 있다면? 혹은 취미!',
        A: '주말마다 맛집 탐방이 취미였지만.. 코로나때문에 못다니고 있습니다.. 💦 요즘은 새로운 기술 개발 공부 하면서 토이 프로젝트가 취미입니당. 😉 그리고 프로젝트 정리하면서 velog를 통한 회고록을 작성합니다! (TIL도 재밌어요!)',
      },
      {
        Q: '🥑 자신의 TMI 하나 뿌려주세요~!',
        A: 'TMI지만... 10일 경에 화이자 1차 맞고 부작용나서 입원하다가 추석을 날렸읍니다.. 🤪 해커톤이나 대외 활동 등 관심이 많으시다면!! 블로그 구경오세요~!!!🙂',
      },
      {
        Q: '🍚 싫어하는 음식과 좋아하는 음식은?',
        A: '!!!강경!!! 반민초입니다. 개인적으로 치킨을 사랑합니다 ❤',
      },
      {
        Q: '⭐️ 마지막 한마디!!',
        A: '다같이 친해졌으면 좋겠습니다...!',
      },
    ],
  },
  {
    id: 2,
    username: '조양원',
    profile:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a7e8f68-cfd0-408c-b59c-f967b3208a6b/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T052600Z&X-Amz-Expires=86400&X-Amz-Signature=c7498daa7ce63773b849e42f3257640e98a0c18603ddac0067c1d41601f40dfe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2580%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25B71.png%22',
    detail: [
      {
        content: '미디어커뮤니케이션 학과 26살',
      },
    ],
    question: [
      {
        Q: '🖐🏻 이름 / 나이 / 전공',
        A: '조양원 / 26 / 미디어커뮤니케이션 사진에서 보이는 것처럼 따봉에 진심인 사람입니다 👍 태생이 문돌이인데 개발을 시작한지 113일 된 개린이입니당 헿(21.09.28 기준) 그리고 많은 분들이 안경을 궁금해 할 것 같은데요 궁금하신 분들은 아래 토글에서 살펴보시죠!',
      },
      {
        Q: '🔎 MBTI → 제 성격은요!',
        A: 'ENTJ 일할 때는 제가 봐도 TJ 같은데 평소에는 계획하고 이러면 머리아프고 귀찮아서 즉흥 좋아합니다 평소에는 말 많고, 질문 많고 그렇습니다 전에는 기획파트를 했는데 기획얘기하는 것도 무쟈게 좋아합니다',
      },
      {
        Q: '🔥 요새 푹 빠진 것이 있다면? 혹은 취미!',
        A: '요즘에 매일 ♛체스♜를 두는데(잘하진 못함...) 혹시 좋아하는 분들은 체스 앱 깔아서 같이하시죠! 보드게임도 무쟈게 좋아함다',
      },
      {
        Q: '🥑 자신의 TMI 하나 뿌려주세요~!',
        A: '요즘에 매일 ♛체스♜를 두는데(잘하진 못함...) 혹시 좋아하는 분들은 체스 앱 깔아서 같이하시죠! 보드게임도 무쟈게 좋아함다 제 자취방에 많은 솝트인들이 놀러와서 술도 먹고, 같이 일도 하고 그랬는데 이번에도 같이 놀면 좋겠슴당 여러분도 언제든 놀러오십쇼 :)',
      },
      {
        Q: '🍚 싫어하는 음식과 좋아하는 음식은?',
        A: '한식 좋아함다! 간장게장, 간장새우는 못먹슴다! 앱잼 같이 하면 제가 요리를 해드릴지도...?',
      },
      {
        Q: '⭐️ 마지막 한마디!!',
        A: '기분 좋은 하루 보내세용 :)',
      },
    ],
  },
  {
    id: 3,
    username: '이남준',
    profile:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1594c80-e5b8-4923-9f79-1ba821d7d442/1560571583658-11.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T053406Z&X-Amz-Expires=86400&X-Amz-Signature=92e993f1a076556c8be35655540197265f9cd3823888f55b0f978210ab2b8917&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221560571583658-11.jpg%22',
    detail: [
      {
        content: '컴퓨터소프트웨어공학과 BE 개발자 희망',
      },
    ],
    question: [
      {
        Q: '🖐🏻 이름 / 나이 / 전공',
        A: '안녕하세요!🖐🏻 이름은 이남준, 나이는 96년생 26살입니다. 순천향대학교 컴퓨터소프트웨어공학과 4학년 2학기를 다니고 있어요! 멋쟁이사자처럼 7기~8기, Google DSC, UNIT, NAVER boostcamp Web/Mobile 6th 등 여러 활동을 해왔구요. 더 많은 활동과 공부, 네트워킹을 하고 싶어합니다:) 저는 해커톤 중독자라서 해커톤 정말 좋아합니다ㅎㅎ 여러 해커톤도 많이 참여해왔어요! 여러분과 함께 공부하고 공유하는 것을 좋아하는 학생 개발자입니다. 앞으로 잘부탁드려요!',
      },
      {
        Q: '🔎 MBTI → 제 성격은요!',
        A: 'ESFJ입니다!! 주변에 저랑 똑같은 사람을 본적이 없는데, OT때 팟장님이랑 같은 MBTI라는 걸 알게됐네요ㅎㅎ ESFJ가 진짜 없더라구요ㅠㅠ',
      },
      {
        Q: '🔥 요새 푹 빠진 것이 있다면? 혹은 취미!',
        A: '푹 빠진거라... 환승연애에 빠져있어요! 막 사람들의 연애 스토리에 공감도 되기도 해서 너무 재밌게 보고 있네요ㅎㅎ 취미는... 뭐가 있지... 아 기타치는 것을 좋아해서 가아끔 기타 치고 놉니다. 근데 요즘은 바빠서 많이 못치고 있어요ㅠ 음악 듣는 것도 좋아하니 혹시 백예린 노래 좋아하시는 분들 친하게 지내요~',
      },
      {
        Q: '🥑 자신의 TMI 하나 뿌려주세요~!',
        A: '저는 매번 탈색병에 걸려있는 사람이에요ㅋㅋㅋㅋㅋ 위 프로필 사진도 탈색하고 염색했을때 사진인데, 지금은 까만색입니다. 근데 또 탈색이 하고싶어요... 하지만 미용실에서는 하지말래서 슬퍼하는 중입니다ㅠㅠ',
      },
      {
        Q: '🍚 싫어하는 음식과 좋아하는 음식은?',
        A: '저는 매번 탈색병에 걸려있는 사람이에요ㅋㅋㅋㅋㅋ 위 프로필 사진도 탈색하고 염색했을때 사진인데, 지금은 까만색입니다. 근데 또 탈색이 하고싶어요... 하지만 미용실에서는 하지말래서 슬퍼하는 중입니다ㅠㅠ전 정말 잡식성 인간이라 싫어하고 좋아하는게 딱히 없는 것 같아요! 지금 생각나는거라곤 민초...?ㅋㅋㅋㅋㅋㅋㅋㅋ 반민초단입니다ㅋㅋㅋㅋㅋ 아 쓰다보니 하나 또 생각났는데, 너무 느끼한건 싫어했던 것 같습니다:) 좋아하는거라곤 음... 한식류? 생각하다보니 국물안주를 좋아한다는게 생각났어요!ㅋㅋ',
      },
      {
        Q: '⭐️ 마지막 한마디!!',
        A: '사람들과 소통하고 같이 성장해나가는 것을 즐기는 타입이라 이번 SOPT 활동이 너무 기대됩니다! 사람들 챙기는 것도 좋아하고 직접 만나면 낯가리는 분들한테도 잘 다가가니까 재밌게 활동해봐요~',
      },
    ],
  },
];

const UserDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 17px 0;
  border-radius: 15px;
  flex-direction: column;
  background-color: ${color.grey500};
`;
const InnerWrapper = styled.div`
  width: 100%;
  padding: 0 21px;
  margin: 0 auto;
`;

const UserDetailContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 18px;
  flex-direction: column;
`;
const moveOnTop = () => (document.documentElement.scrollTop = 0);
const renderDetailContent = ({ detail }) =>
  detail.map((item, index) => <UserDetailContent key={index}>{item.content}</UserDetailContent>);

const UserDetailPage = () => {
  const { id } = useParams();
  const data = DUMMY_DATA[id - 1];
  const pageHandler = useSwipeable({
    onSwipedRight: (SwipeEventData) => {
      alert('left');
    },
    onSwipedLeft: (SwipeEventData) => {
      alert('right');
    },
  });

  return (
    <>
      <UserDetailWrapper {...pageHandler}>
        <DetailHeader username={data.username} />
        <InnerWrapper>
          <ProfileImage src={data.profile} />
          <UserDetailContentWrapper>{renderDetailContent(data)}</UserDetailContentWrapper>
          <Question question={data.question} />
        </InnerWrapper>
      </UserDetailWrapper>
      <TopButton style={{ marginBottom: '20px' }} onClick={moveOnTop} />
    </>
  );
};

export default UserDetailPage;
