import { ReactNode } from 'react';

export type TableRowProps = {
  /**
   * The indicated as selected  of row;
   */
  selected?: boolean;

  /**
   * The content of cell
   */
  children: ReactNode;
};
