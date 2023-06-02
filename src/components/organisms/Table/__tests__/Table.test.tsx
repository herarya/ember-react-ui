import { composeStories } from '@storybook/react';
import { render, fireEvent , screen } from '@testing-library/react';
import * as stories from '../Table.stories';

import SortDownIcon from './../../../atoms/SortButton/images/Sorting_Down.png';
import SortUpIcon from './../../../atoms/SortButton/images/Sorting_Up.png';
import SortNeturalIcon from './../../../atoms/SortButton/images/Sorting_Netural.png';
import { url } from 'inspector';
import React, { useState } from 'react';

const { Default, TableWithSorting, TableWithCheckbox, TableWithRadio, TableRadioMobileResponsive } = composeStories(stories);

test('should render table', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});


test('should render Table With Sorting', () => {
    const container = render(<TableWithSorting />);
    expect(container).toMatchSnapshot();
});


test('should render Table With Checkbox', () => {
    const container = render(<TableWithCheckbox />);
    expect(container).toMatchSnapshot();
});


test('should handle onClick checkbox', () => {
    const { getAllByRole } = render(<TableWithCheckbox/>);
    const checkbox = getAllByRole('checkbox');
    fireEvent.click(checkbox[0]);
    expect(checkbox[0]).toBeChecked();
});


test('should handle onClick radio', () => {
    const { getAllByRole } = render(<TableWithRadio/>);
    const radio = getAllByRole('radio');
    fireEvent.click(radio[0]);
    expect(radio[0]).toBeChecked();
});

test('should render Table Responsive Mobile', () => {
    const container = render(<TableRadioMobileResponsive />);
    expect(container).toMatchSnapshot();
});

test('should handle onClick Sorting', () => {
    const { getAllByRole } = render(<TableWithSorting />);
    const button = getAllByRole('button');
    // run for descending
    fireEvent.click(button[0]);
     // run for ascending
    fireEvent.click(button[1]);
    expect(button[0]).toHaveStyle(`background-image: url(${SortNeturalIcon})`);
});

test('should handle on checkbox', () => {
    const { getAllByRole } = render(<TableWithCheckbox />);
    const checkbox = getAllByRole('checkbox');
    fireEvent.click(checkbox[0]);
    expect(checkbox[0]).toBeChecked();
    // to check if id checked already have 
    fireEvent.click(checkbox[0]);
    expect(checkbox[0]).not.toBeChecked();
});


