import styled from 'styled-components';

const CardStyled = styled.div`
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 16px;
  padding: 0;
  margin: 20px;
  padding-bottom: 16px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    border-radius: 8px;
  }
`;

export default CardStyled;
