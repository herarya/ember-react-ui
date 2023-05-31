import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Ember UI/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    value: 'checkbox-value-here',
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    value: 'checkbox-value-here',
    onChange : action('onChange')
  },
};

export const UnChecked: Story = {
  args: {
    isChecked: false,
    value: 'checkbox-value-here',
    onChange : action('onChange')
  },
};

