import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableHeaderCell from './TableHeaderCell';
import { IHeaderCellDirection } from './types';
// import TableDataCell from '../../atoms/TableDataCell/TableDataCell';

const meta: Meta<typeof TableHeaderCell> = {
  title: 'Ember UI/Molecules/TableHeaderCell',
  component: TableHeaderCell,
  tags: ['autodocs']
};


export default meta;

type Story = StoryObj<typeof TableHeaderCell>;

// fix Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
const TableHeaderCellTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <table>
        <thead>
          <tr>
            <TableHeaderCell {...args}/>
          </tr>
        </thead>
      </table>
    );
  },
};



export const Default: Story = {
  ...TableHeaderCellTemplate,
    args: {
      text : 'Header Column',
    },
};

export const WithSortAsc: Story = {
  ...TableHeaderCellTemplate,
  args: {
    text : 'Header Column',
    sortable : true,
    direction : IHeaderCellDirection.ascending,
    sortField : 'operator',
    onSort : action('onClick')
  },
};

export const WithSortDesc: Story = {
  ...TableHeaderCellTemplate,
  args: {
    text : 'Header Column',
    sortable : true,
    direction : IHeaderCellDirection.descending,
    sortField : 'operator',
    onSort : action('onClick')
  },
};

export const WithSortDefault: Story = {
  ...TableHeaderCellTemplate,
    args: {
      text : 'Header Column',
      sortField : 'operator',
      sortable : true,
      direction : IHeaderCellDirection.none,
      onSort : action('onClick')
    },
};
