import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.style';
import { baseStyle } from './base.style';

export const GlobalStyle =  createGlobalStyle `
    ${reset}
    ${baseStyle}
`