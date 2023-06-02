import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Table from './Table';
import Card from './../../atoms/Card';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Table> = {
  title: 'Ember UI/Organisms/Table',
  component: Table,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Table>;

const mockTableDefault = {
  columns: [
    {
      actionType: 'none',
      headerTitle: 'Operator',
      dataField: 'operator',
    },
    {
      actionType: 'none',
      headerTitle: 'Headset Display',
      dataField: 'headsetDisplay',
    },
    {
      actionType: 'none',
      headerTitle: '3G Availability',
      dataField: 'availability',
    },
  ],
  dataSource: [
    {
      operator: '*Celcom Axiata (LTE)',
      headsetDisplay: 'CELCOM / My Celcom / 502 19',
      availability: 'Yes',
      id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba',
    },
    {
      operator: '*DiGi Telecom (LTE)',
      headsetDisplay: 'DiGi 1800 / DiGi / MYMY18',
      availability: 'Yes',
      id: 'cd5d39b8-488e-4ab7-8eef-5966be7f44e1',
    },
    {
      operator: '*Maxis (LTE)',
      headsetDisplay: 'U Mobile / MYS 18 / MY 18',
      availability: 'Yes',
      id: '12287d82-38c4-44f8-a952-0ba39caa22510ba39caa2251',
    },
    {
      operator: 'U Mobile (LTE)',
      headsetDisplay: 'U Mobile / MYS 18 / MY 18',
      availability: 'Yes',
      id: '8bd3a449-128e-4c44-9354-06edd0790e3c06edd0790e3c',
    },
  ],
} as any;


const mockTableSort = {
    columns: [
      {
        actionType: 'none',
        headerTitle: 'Operator',
        dataField: 'operator',
        sortable: true,
      },
      {
        actionType: 'none',
        headerTitle: 'Headset Display',
        dataField: 'headsetDisplay',
        sortable: true,
      },
      {
        actionType: 'none',
        headerTitle: '3G Availability',
        dataField: 'availability',
        sortable: false,
      },
    ],
    dataSource: [
      {
        operator: '*Celcom Axiata (LTE)',
        headsetDisplay: 'CELCOM / My Celcom / 502 19',
        availability: 'Yes',
        id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba',
      },
      {
        operator: '*DiGi Telecom (LTE)',
        headsetDisplay: 'DiGi 1800 / DiGi / MYMY18',
        availability: 'Yes',
        id: 'cd5d39b8-488e-4ab7-8eef-5966be7f44e1',
      },
      {
        operator: '*Maxis (LTE)',
        headsetDisplay: 'U Mobile / MYS 18 / MY 18',
        availability: 'Yes',
        id: '12287d82-38c4-44f8-a952-0ba39caa22510ba39caa2251',
      },
      {
        operator: 'U Mobile (LTE)',
        headsetDisplay: 'U Mobile / MYS 18 / MY 18',
        availability: 'Yes',
        id: '8bd3a449-128e-4c44-9354-06edd0790e3c06edd0790e3c',
      },
    ],
  } as any;


  const mockTableWithCheckbox = {
    columns: [
      {
        actionType: 'checkbox',
        name: 'action_checkbox',
        headerTitle: '',
        dataField: 'id',
      },
      {
        headerTitle: 'BRN',
        dataField: 'brn',
      },
      {
        headerTitle: 'Company Name',
        dataField: 'companyName',
        sortable: false,
      },
    ],
    dataSource: [
      {
        brn: '198702333K',
        companyName: 'Blue Ocean International',
        id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba3',
      },
      {
        brn: '198900364N',
        companyName: 'Red Electronics',
        id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba34',
      },
      {
        brn: '196800306E',
        companyName: 'Purple Automobiles',
        id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba35',
      },
      {
        brn: '199131124V',
        companyName: 'Diamond Interiors Holdings',
        id: 'e1d841e3-ff0a-45a2-8e2e-6c2069b5eaba6c2069b5eaba1',
      },
    ],
  } as any;


  const mockTableWithRadio = {
    columns: [
      {
        actionType: 'radio',
        name: 'action_radio',
        dataField: 'contact_name',
      },
      {
        headerTitle: 'Name',
        dataField: 'name',
      },
      {
        headerTitle: 'Mobile',
        dataField: 'mobile',
      },
      {
        headerTitle: 'Expiry',
        dataField: 'expiry',
      },
      {
        headerTitle: 'Penalty',
        dataField: 'penalty',
      },
    ],
    dataSource: [
      {
        name: 'Mavis Chen 1',
        mobile: '8899 7654',
        expiry: 'Dec 2022',
        penalty: '$200',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        name: 'Rodney Artichoke' ,
        mobile: '9988 7676',
        expiry: 'Dec 2022',
        penalty: '$300',
        id: '6844f30e-3b52-4abd-8875-e4796b4231a314',
      },
      {
        name: 'Valentino Morose' ,
        mobile: '9988 7626',
        expiry: 'Dec 2022',
        penalty: '$60',
        id: '6844f30e-3b52-4abd-8875-e4796b41a314',
      }
    ],
  } as any;


  const mockTableCenter = {
    columns: [

      {
        headerTitle: 'Destination',
        dataField: 'destination',
      },
      {
        headerTitle: 'Mins',
        dataField: 'min',
        align : 'center'
      },
      {
        headerTitle: 'Rate/Min',
        dataField: 'rate',
        align : 'right'
      },
    ],
    dataSource: [
      {
        destination: 'Bangladesh',
        min: '240',
        rate: '$0.03',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        destination: 'China',
        min: '600',
        rate: '$0.03',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        destination: 'India',
        min: '600',
        rate: '$0.01',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        destination: 'Indonesia',
        min: '90',
        rate: '$0.01',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        destination: 'Malaysia',
        min: '60',
        rate: '$0.07',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      },
      {
        destination: 'Myanmar',
        min: '35',
        rate: '$0.07',
        id: 'fbdc5d99-c117-4722-9a84-fc463fd6bbb7',
      }
    ],
  } as any;


const TableTemplate: Story = {
  render: ({ ...args }) => (<Card>
    <div style={{ paddingBottom: 10 }}><Table {...args}/></div>
  </Card>),
};


export const Default: Story = {
  ...TableTemplate,
  args: {
    columns : mockTableDefault.columns,
    dataSource : mockTableDefault.dataSource,
  },
};

export const TableWithSorting: Story = {
    ...TableTemplate,
    args: {
      columns : mockTableSort.columns,
      dataSource : mockTableSort.dataSource,
    },
};


export const TableWithCheckbox: Story = {
  ...TableTemplate,
  args: {
    columns : mockTableWithCheckbox.columns,
    dataSource : mockTableWithCheckbox.dataSource,
  },
};


export const TableWithRadio: Story = {
  ...TableTemplate,
  args: {
    columns : mockTableWithRadio.columns,
    dataSource : mockTableWithRadio.dataSource,
  },
};


export const TableRadioMobileResponsive: Story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12promax',
    },
  },
  ...TableTemplate,
  args: {
    showCaption : true,
    caption: 'Contract details',
    responsive : true,
    columns : mockTableWithRadio.columns,
    dataSource : mockTableWithRadio.dataSource,
  },
};


export const TableCenterMobileResponsive: Story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12promax',
    },
  },
  ...TableTemplate,
  args: {
    columns : mockTableCenter.columns,
    dataSource : mockTableCenter.dataSource,
  },
};


export const TableWithCheckboxMobile: Story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12promax',
    },
  },
  ...TableTemplate,
  args: {
    columns : mockTableWithCheckbox.columns,
    dataSource : mockTableWithCheckbox.dataSource,
  },
};


export const TableWithRadioMobile: Story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12promax',
    },
  },
  ...TableTemplate,
  args: {
    columns : mockTableWithRadio.columns,
    dataSource : mockTableWithRadio.dataSource,
  },
};
