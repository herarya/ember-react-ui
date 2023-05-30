import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../Checkbox.stories';


const { Checked, UnChecked } = composeStories(stories);

test('should render checkbox is checked', () => {
    render(<Checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
});

test('should render checkbox is unchecked', () => {
    const { getByRole } = render(<UnChecked />);
    const checked = getByRole('checkbox');
    expect(checked).not.toBeChecked();
});

test('It should have input value', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<UnChecked onChange={onChange}/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toBeCalledWith(true, 'checkbox-value-here');
});