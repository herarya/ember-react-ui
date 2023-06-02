export enum IHeaderCellDirection {
    ascending = 'ascending',
    descending = 'descending',
    none = 'none',
  }
  
export type TableHeaderCellProps = {
    /**
     * The label name for cell
     */
    text: string;
     /**
     * Defines if a column is sortable.
     * @defaultValue false
     */
    sortable?: boolean | undefined;
    /**
    * Aligns the text, valid values are left, right and center.
    */
    textAlign?: 'left' | 'right' | 'center' | undefined | null;
    /**
     * Handle the event when sorting or filtering the products.
     */
    onSort?: (sortBy: string) => void;
    /**
     * To set sort field name
     */
    sortField?: string;
     /**
     * To set direction
     */
    direction: IHeaderCellDirection;
    /**
     * To set sort by field 
     */
    sortedBy?: string | undefined | null
};
  