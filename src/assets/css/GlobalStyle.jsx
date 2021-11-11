import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
        font-family: 'NotoSansCJK Variable';
        font-weight: 400;
        font-style: normal;
    }
`;

export default Globalstyle;
