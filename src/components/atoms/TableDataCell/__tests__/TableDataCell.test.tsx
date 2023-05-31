import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../TableDataCell.stories';

const { Default, Responsive, Input } = composeStories(stories);


test('should render a column with content', () => {
    render(<Default />);
    const cellContent = screen.getByText(/Table Column Content/i);
    expect(cellContent).toBeInTheDocument();
});

test('should render a column with correct title', () => {
    render(<Responsive />);
    const cellContent = screen.getByText(/Column Header/i);
    expect(cellContent).toBeInTheDocument();
});


test('should render a column varian responsive', () => {
    render(<Responsive />);
    const byrole = screen.getByRole('row', { name: 'Column Header: Details Info' } );
    expect(byrole).toBeTruthy();
});

test('should render a column with checkbox', () => {
    render(<Input/>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
});

