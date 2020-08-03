import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: grid;
    grid-template-columns: 12fr;
    align-items: center;
    justify-items: center;
    margin-top: 5em;
    color: #69747c;
    font-family: 'Roboto', sans-serif;
    font-size: .9em;
    font-weight: 400;
  }
`;
