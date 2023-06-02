import styled from 'styled-components';

const RadioStyled = styled.input`
  width: 32px;
  height: 32px;
  vertical-align: top;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  appearance: none;
  border-radius: 50%;

  &:checked:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 8px;
  }

  &:disabled:not(:checked) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled:checked {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    border-radius: 50%;
    &:checked:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary};
      border-width: 6px;
    }
  }
`;

export default RadioStyled;
