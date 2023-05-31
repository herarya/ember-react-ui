import type { Meta, StoryObj, } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SortButton from './SortButton';

const meta: Meta<typeof SortButton> = {
  title: 'Ember UI/Atoms/SortButton',
  component: SortButton,
  tags: ['autodocs'],
  argTypes: {},
};


export default meta;

type Story = StoryObj<typeof SortButton>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};


export const Up: Story = {
    args: {
      variant: 'up',
      onClick: action('onClick')
    },
  };


export const Down: Story = {
    args: {
      variant: 'down',
      onClick: action('onClick')
    },
};

