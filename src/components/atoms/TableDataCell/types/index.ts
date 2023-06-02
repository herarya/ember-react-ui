import { ReactNode } from 'react';

export type TableDataCellProps = {
  /**
   * to have label alternative for responsive
   */
  title?: string;
  /**
  * Used to get the child elements of the component.
  */
  children: ReactNode;
  /**
   * The variant of cell allows values:
   * default, responsive , center, input
   */
  variant: 'default' | 'responsive' | 'input';
  /**
  * Aligns the content of the column, valid values are left, right and center.
  * @defaultValue left
  */
  align?: 'left' | 'right' | 'center' | undefined | null;
};
