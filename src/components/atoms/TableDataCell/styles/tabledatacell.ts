import styled, { css } from 'styled-components';

type Itd = {
  /**
   * The variant of cell allows values:
   * responsive , center,  input
   */
  variant: 'default' | 'responsive' | 'input';
   /**
  * Used to set text align
  * @defaultValue left
  */
  textAlign?: 'left' | 'right' | 'center' | undefined | null;
}

export const TableDataCellStyled = styled.td<Itd>`
  font-family: "Avenir-Book";
  letter-spacing: 0;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.75;
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;


  ${({ variant }) =>
    variant === 'input' &&
    css`
      width: 30px;
      height: 30px;
    `}
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
    breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    vertical-align: top;
    text-align: ${({ textAlign }) => textAlign};
    padding-top: 8px;
    padding-bottom: 5px;
    padding-right: ${({ textAlign }) => textAlign === 'left' ? '16px' : '0'};

    ${({ variant }) =>
      variant === 'responsive'
        ? css`
            display: flex;
            label {
              font-weight: bold;
              width: 30%;
            }
          `
        : css`
            display: table-cell;
            label {
              display: none;
            }
          `}

    input {
      width: 24px;
      height: 24px;
    }
  }
`;
