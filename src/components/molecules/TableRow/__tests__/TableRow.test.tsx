import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from '../TableRow.stories';

const { Default , Selected } = composeStories(stories);

test('should render Row', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});


test('should render Row Selected', () => {
    const container = render(<Selected />);
    expect(container).toMatchSnapshot();
});

