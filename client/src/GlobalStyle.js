import {createGlobalStyle} from 'styled-components';
import Background from './images/background-image.png';

export default createGlobalStyle`   
    :root {
        --light-grey: #707070;
        
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4 {
        line-height: 1.2;
    }
    body, h1, h2, h3, h4, p {
        margin: 0;
        color: var(--light-grey);
    }

    body {
        font-family: 'Noteworthy', sans-serif;
        background-image: url(${Background});
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        }
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;
