import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../Radio.stories';

const { Default, Checked, UnChecked } = composeStories(stories);

test('should render radio', () => {
    const container = render(<Default />);
    expect(container).toMatchSnapshot();
});

test('should render radio is checked', () => {
    render(<Checked />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
});

test('should render radio is unchecked', () => {
    const { getByRole } = render(<UnChecked />);
    const checked = getByRole('radio');
    expect(checked).not.toBeChecked();
});


test('It should handleChangeCheckBox', () => {
    const { getByRole } = render(<UnChecked/>);
    const radio = getByRole('radio');
    fireEvent.click(radio);
    expect(radio).toBeChecked();
});

test('It should call onChange', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<UnChecked onChange={onChangeMock}/>);
    const radio = getByRole('radio');
    fireEvent.click(radio);
    expect(onChangeMock).toBeCalledTimes(1);
});