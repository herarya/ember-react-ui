import { createGlobalStyle } from './styled-components';

import AvenirHeavyEot from './fonts/Avenir-Heavy.eot';
import AvenirHeavySvg from './fonts/Avenir-Heavy.svg';
import AvenirHeavyTtf from './fonts/Avenir-Heavy.ttf';
import AvenirHeavyWoff from './fonts/Avenir-Heavy.woff';
import AvenirHeavyWoff2 from './fonts/Avenir-Heavy.woff2';

import AvenirBookEot from './fonts/Avenir-Book.eot';
import AvenirBookSvg from './fonts/Avenir-Book.svg';
import AvenirBookTtf from './fonts/Avenir-Book.ttf';
import AvenirBookWoff from './fonts/Avenir-Book.woff';
import AvenirBookWoff2 from './fonts/Avenir-Book.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Avenir Heavy';
    src: url(${AvenirHeavyEot});
    src: url(${AvenirHeavyEot}?#iefix') format('embedded-opentype'),
    url(${AvenirHeavyWoff}) format('woff'),
    url(${AvenirHeavyWoff2}) format('woff2'),
    url(${AvenirHeavyTtf}) format('truetype'),
    url(${AvenirHeavySvg}##Avenir Heavy') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Book';
    src: url(${AvenirBookEot});
    src: url(${AvenirBookEot}?#iefix') format('embedded-opentype'),
    url(${AvenirBookWoff}) format('woff'),
    url(${AvenirBookWoff2}) format('woff2'),
    url(${AvenirBookTtf}) format('truetype'),
    url(${AvenirBookSvg}##Avenir Book') format('svg');
    font-weight: normal;
    font-style: normal;
  }


  body {
    margin: 0;
    font-family: Avenir Book;
  }
`;

export default GlobalStyle;
