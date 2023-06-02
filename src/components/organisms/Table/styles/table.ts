import styled from 'styled-components';

type Itable = {
  /**
   * The set is responsive
   */
  responsive: boolean;
}

const TableStyled = styled.table<Itable>`
  border-spacing: 0 !important;
  border-collapse: collapse;
  border: 0;
  width: 100%;

  caption {
    background-color: ${({ theme }) => theme.colors.tableHeaderBg};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: "Avenir-Heavy";
    letter-spacing: 0;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.75;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding-left: 65px;
  }

  thead {
    background-color: ${({ theme }) => theme.colors.tableHeaderBg};
    tr td:first-child {
      border-top-left-radius: 10px;
    }
    tr td:last-child {
      border-top-right-radius: 10px;
    }
  }

  tbody {
    tr td:first-child,
    tr td:last-child {
      width: 32px;
      border-bottom: 1px solid white;
    }
    tr:not(:last-child) {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider};
    }
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    thead {
      display: ${({ responsive }) =>
        responsive ? 'none' : 'table-header-group'};
    }
    tbody {
      tr td:first-child,
      tr td:last-child {
        width: 16px;
      }
    }
  }
`;

export default TableStyled;
