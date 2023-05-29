import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { StyleEmberTheme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<StyleEmberTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
