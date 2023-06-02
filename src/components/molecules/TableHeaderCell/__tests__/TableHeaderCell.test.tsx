import { composeStories } from '@storybook/react';
import { render, fireEvent } from '@testing-library/react';
import * as stories from '../TableHeaderCell.stories';

const { Default , WithSortAsc, WithSortDesc, WithSortDefault } = composeStories(stories);

test('should render Table Header Cell', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});

test('should render Table Header Cell with sort Asc button', () => {
    const container = render(<WithSortAsc />);
    expect(container).toMatchSnapshot();
});

test('should render Table Header Cell with sort desc button', () => {
    const container = render(<WithSortDesc/>);
    expect(container).toMatchSnapshot();
});

test('should render Table Header Cell with sort Asc button', () => {
    const container = render(<WithSortAsc />);
    expect(container).toMatchSnapshot();
});

test('should render Table Header Cell with sort default', () => {
    const container = render(<WithSortDefault/>);
    expect(container).toMatchSnapshot();
});

test('should render Table Header Cell with sort onClick', () => {
    const onSort = jest.fn();
    onSort.mockReturnValue('mockReturnValueOnce');
    const { getByRole } = render(<Default onSort={onSort} text='Header Column' sortField='operator' sortable={true}/>);
    const sortButton = getByRole('button');
    fireEvent.click(sortButton);
    expect(onSort).toBeCalled();
});



// const radio = getByRole('radio');
// fireEvent.click(radio);
// expect(radio).toBeChecked();