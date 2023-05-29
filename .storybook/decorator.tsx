import React from 'react'
import { Decorator } from '@storybook/react'
import GlobalStyle from '../src/styles/global-style';
import { ThemeProvider } from '../src/styles/styled-components';
import { theme, darkTheme } from '../src/styles/theme';

const withTheme: Decorator = (StoryFn, context) => {
   const selectedTheme = context.globals.theme;
   return (
     <ThemeProvider theme={selectedTheme === "ember-dark" ? darkTheme : theme}>
        <GlobalStyle/>
        <StoryFn />
     </ThemeProvider>
    )
  }
  
  // export all decorators that should be globally applied in an array
  export const addDecorators = [withTheme]