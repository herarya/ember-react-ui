import styled from 'styled-components';

type IRow = {
  /**
   * The indicated as selected  of row;
   */
  selected: boolean;
}

const TableRowStyled = styled.tr<IRow>`
  font-family: "Avenir-Book";
  letter-spacing: 0;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.75;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.rowSelected : 'transparent'};
`;

export default TableRowStyled;
