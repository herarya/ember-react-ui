
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import TableDataCell from './TableDataCell';
import CheckBox from '../Checkbox/Checkbox';

const meta: Meta<typeof TableDataCell> = {
  title: 'Ember UI/Atoms/TableDataCell',
  component: TableDataCell,
  tags: ['autodocs']
};


export default meta;

type Story = StoryObj<typeof TableDataCell>;

// fix Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
const ColumnTemplate: Story = {
    render: ({ ...args }) => {
      return (
        <table>
          <tbody>
          <tr>
              <TableDataCell {...args}/>
           </tr>
          </tbody>

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
          <tbody> 
            <tr>
              <TableDataCell {...args}>
                 <CheckBox isChecked={true} name="test" id="id-checked" value="checked" />
               </TableDataCell>
              </tr>
                
                </tbody>
             
        </table> 
    ),
    args: {
        variant: 'input',
        title: 'Header'
    },
};
