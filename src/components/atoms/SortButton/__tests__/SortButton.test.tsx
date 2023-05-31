import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../SortButton.stories';

const { Default, Up, Down } = composeStories(stories);
test('should render Sort Button', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});

test('should render Sort Button with UP Icon', () => {
    const container = render(<Up />);
    expect(container).toMatchSnapshot();
});

test('should render Sort Button with Down Icon', () => {
    const container = render(<Down />);
    expect(container).toMatchSnapshot();
});