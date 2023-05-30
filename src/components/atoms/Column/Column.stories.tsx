
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Column from './Column';
import CheckBox from '../Checkbox/Checkbox';

const meta: Meta<typeof Column> = {
  title: 'Ember UI/Atoms/Column',
  component: Column,
  tags: ['autodocs']
};


export default meta;

type Story = StoryObj<typeof Column>;

// fix Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
const ColumnTemplate: Story = {
    render: ({ ...args }) => {
      return (
        <table>
            <thead>
            <tr>
                <Column {...args}/>
            </tr>
            </thead>
        </table>
      );
    },
  };

export const Default: Story = {
  ...ColumnTemplate,
  args: {
    children : <span>Table Column Content</span>
  },
};

export const Responsive: Story = {
  ...ColumnTemplate,
  args: {
    title: 'Column Header',
    children : 'Details Info',
    variant: 'responsive'
  },
};

export const Input: Story = {
    render: (args) => (
        <table>
            <thead>
                <tr>
                    <Column {...args}>
                        <CheckBox isChecked={true} name="test" id="id-checked" value="checked" />
                    </Column>
                </tr>
            </thead>
        </table> 
    ),
    args: {
        variant: 'input',
        title: 'Header'
    },
};
