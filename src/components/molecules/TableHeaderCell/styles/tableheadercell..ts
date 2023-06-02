import styled, { css } from 'styled-components';

type IThHeader = {
  sortable?: boolean | undefined;
  /**
  * Aligns the content of the column, valid values are left, right and center.
  */
  textAlign?: 'left' | 'right' | 'center' | undefined | null;
}

type IDivTitle = {
  sortable?: boolean;
}

export const HeaderTitleStyled = styled.div<IDivTitle>`
  font-family: "Avenir-Heavy";
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding-top: ${({ sortable }) => (sortable ? 0 : '24px')};
  padding-bottom: 24px;
  padding-bottom: 24px;
  padding-top: 24px;
  padding-top: 24px;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding-bottom: 8px;
    padding-top: 8px;
  }
`;

export const TableHeaderCellStyled = styled.th<IThHeader>`
    text-align : ${({ textAlign }) => textAlign};
    padding-right: 0};

    ${({ sortable }) =>
    sortable &&
      css`
        div {
          display: table-cell;
          vertical-align: middle;
        }
      `}
    }
`;
