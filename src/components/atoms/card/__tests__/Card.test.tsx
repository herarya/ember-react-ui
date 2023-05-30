import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../Card.stories';


const { Default } = composeStories(stories);


test('should render a card with content', () => {
    render(<Default />);
    const card = screen.getByText('Card Content');
    expect(card).toBeTruthy();
});