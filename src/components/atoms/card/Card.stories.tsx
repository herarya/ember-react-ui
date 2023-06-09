import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Ember UI/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children : <div style={{ padding: 20 }}>Card Content</div>
  },
};