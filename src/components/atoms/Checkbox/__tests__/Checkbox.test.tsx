import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../Checkbox.stories';

const { Default, Checked, UnChecked } = composeStories(stories);
test('should render checkbox', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});
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

test('It should have input value handle checked on change', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<UnChecked onChange={onChangeMock}/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChangeMock).toBeCalledWith(true, 'checkbox-value-here');
});

test('It should have input value handle unchecked on change', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<Checked onChange={onChangeMock}/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChangeMock).toBeCalledWith(false, 'checkbox-value-here');
});

test('It should handleChangeCheckBox', () => {
    const { getByRole } = render(<Default isChecked/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
});

