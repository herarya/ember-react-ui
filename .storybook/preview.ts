import type { Preview } from '@storybook/react'
import { addDecorators } from './decorator';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'ember-light',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      items: [{ value: 'ember-light', left: '🌕', title: 'Theme Ember light' }, {value: 'ember-dark', left: '🌑', title: 'Theme Ember dark'}],
      dynamicTitle: true,
    },
  },
};

export const decorators = addDecorators;