import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { StyleEmberTheme } from './theme';

// https://stackoverflow.com/questions/55170801/how-to-type-a-styled-component-without-losing-any-prop-with-typescript

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<StyleEmberTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
