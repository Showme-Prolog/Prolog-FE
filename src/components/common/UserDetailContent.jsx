import styled from 'styled-components';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
const UserDetailContent = styled.span`
  ${font.Text2_11px}
  color: ${color.white};

  &:not(:first-of-type) {
    margin-top: 4px;
  }
`;

export default UserDetailContent;
