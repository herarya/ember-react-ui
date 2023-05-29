import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Ember UI/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    content : <div>Card Content</div>
  },
};
