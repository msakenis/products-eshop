import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.background.main};
  color: ${({ theme }) => theme.grey.dark};

}
`;
export default GlobalStyle;
