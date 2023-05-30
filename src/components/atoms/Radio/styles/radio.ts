import styled from 'styled-components';

const RadioStyled = styled.input`
  width: 32px;
  height: 32px;
  vertical-align: top;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  appearance: none;
  border-radius: 50%;

  &:checked{
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 8px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
        width: 24px;
        height: 24px;
  }
`;

export default RadioStyled;
