import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import color from '@assets/colors/Color';

const Globalstyle = createGlobalStyle`
    ${reset};
    a{ 
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        width: 100%;
        font-family: 'NanumSquare', sans-serif;
        font-weight: 400;
        background-color: ${color.black};
    }
    button {
        border: 0;
        background: 0;
        padding: 0;
        margin: 0;
    }
`;

export default Globalstyle;
