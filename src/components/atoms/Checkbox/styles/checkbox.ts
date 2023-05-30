import styled from 'styled-components';

const CheckboxStyled = styled.input`
  width: 32px;
  height: 32px;
  vertical-align: top;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.colors.border};
  appearance: none;

  &[type="checkbox"] {
    border-radius: 8px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border};
    outline: 0;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background-size: 20px 20px;

    @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
        breakpoints.mobile}) {
      background-size: 10px 10px;
    }

    &[type="checkbox"] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
  }

  &:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 24px;
    height: 24px;

    &[type="checkbox"] {
      border-radius: 4px;
    }
  }
`;

export default CheckboxStyled;
