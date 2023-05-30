import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Ember UI/Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Radio>;

export const Checked: Story = {
  args: {
    isChecked: true,
    value: 'radio-value-here',
    onChange : action('onChange')
  },
};

export const UnChecked: Story = {
  args: {
    isChecked: false,
    value: 'radio-value-here',
    onChange : action('onChange')
  },
};


