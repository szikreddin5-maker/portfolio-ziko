import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  *, *::before, *::after { box-sizing: border-box; }
  html { font-size: 62.5%; scroll-behavior: smooth; }
  [id] { scroll-margin-top: 92px; }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    line-height: 1.55;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    overflow-wrap: break-word;
  }
  main { min-width: 0; }
  h1, h2, h3, h4, h5, h6, button { font-family: ${props => props.theme.fonts.title}; }
  a { text-decoration: none; }
  :focus-visible { outline: 2px solid #67e8f9; outline-offset: 3px; }
  ::selection { background: rgba(103,232,249,.3); color: #fff; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    html { scroll-behavior: auto; }
  }
`;

export default GlobalStyles;
