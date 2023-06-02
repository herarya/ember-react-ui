import type { Meta, StoryObj } from '@storybook/react';

import TableRow from './TableRow';
import TableDataCell from '../../atoms/TableDataCell/TableDataCell';

const meta: Meta<typeof TableRow> = {
  title: 'Ember UI/Molecules/TableRow',
  component: TableRow,
  tags: ['autodocs']
};


export default meta;

type Story = StoryObj<typeof TableRow>;

// fix Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
const TableRoWTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <table>
        <tbody>
          <TableRow {...args}>
              <TableDataCell variant="default" align='left'>Table Cell Content</TableDataCell>
          </TableRow>
        </tbody>
      </table>
    );
  },
};


export const Default: Story = {
    ...TableRoWTemplate,
    args: { },
};

export const Selected: Story = {
  ...TableRoWTemplate,
  args: {
    selected : true,
  },
};