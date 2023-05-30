import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../Radio.stories';

const { Checked, UnChecked } = composeStories(stories);

test('should render radio is checked', () => {
    render(<Checked />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
});

test('should render checkbox is unchecked', () => {
    const { getByRole } = render(<UnChecked />);
    const checked = getByRole('radio');
    expect(checked).not.toBeChecked();
});

test('It should have input value handle checked on change', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<UnChecked onChange={onChangeMock}/>);
    const radio = getByRole('radio');
    fireEvent.click(radio);
    expect(onChangeMock).toBeCalledWith('radio-value-here');
});

