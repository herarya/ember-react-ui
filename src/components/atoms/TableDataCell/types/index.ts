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
  * Used to set text align
  * @defaultValue left
  */
  textAlign: 'left' | 'center' | 'right';
};
