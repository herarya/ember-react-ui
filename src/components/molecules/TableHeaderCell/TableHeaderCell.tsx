import SortButton from '../../atoms/SortButton/SortButton';
import { TableHeaderCellStyled, HeaderTitleStyled } from './styles/tableheadercell.';
import { TableHeaderCellProps } from './types';

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  text,
  sortable,
  textAlign,
  onSort,
  sortField,
  direction,
  sortedBy,
}: TableHeaderCellProps) => {

  const sortVariant = sortField === sortedBy && direction === 'ascending' ? 'up' : sortField === sortedBy && direction === 'descending'
      ? 'down'
      : 'default';

  return (
    <TableHeaderCellStyled textAlign={textAlign} sortable={sortable}>
      <>
        <HeaderTitleStyled sortable={sortable}>{text}</HeaderTitleStyled>
        {sortable && onSort && sortField && (
          <div>
            <SortButton
              variant={sortVariant}
              onClick={() => {
                onSort(sortField);
              }}
            />
          </div>
        )}
      </>
    </TableHeaderCellStyled>
  );
};

export default TableHeaderCell;
