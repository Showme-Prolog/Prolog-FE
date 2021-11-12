import styled from 'styled-components';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
const UserDetailContent = styled.span`
  ${font.Text2_Regular}
  color: ${color.white};

  &:first-of-type {
    margin-bottom: 1px;
  }
`;

export default UserDetailContent;
