export enum ColumnActionType {
    none = 'none',
    radio = 'radio',
    checkbox = 'checkbox',
  }
  
export type TableColumn  = {
    actionType: ColumnActionType;
    headerTitle: string;
    dataField: string;
    sortable?: boolean | undefined;
    align?: 'left' | 'right' | 'center' | undefined | null;
  }
  

 export type TableProps = {
    /**
     * indicate to have caption header
     */
    showCaption?: boolean;
     /**
     * to have caption header
     */
    caption?: string;
    /**
     * A list of TableColumn
     */
    columns: TableColumn[];
    /**
     * Rows of data to display.
     */
    dataSource: any[];
    /**
     * The variant of cell allows values:
     * indicate to support responsive
     */
    responsive: boolean;
     /**
     * The to set default sort desc / asc:
     * indicate to support responsive
     */
     sort?: boolean;
  };
  