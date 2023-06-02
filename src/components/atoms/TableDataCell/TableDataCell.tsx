import { TableDataCellStyled } from './styles/tabledatacell';
import { TableDataCellProps } from './types';

const TableDataCell: React.FC<TableDataCellProps> = ({
  title,
  children,
  variant,
  align,
}: TableDataCellProps) => {
  return (
    <TableDataCellStyled variant={variant} textAlign={align}>
      {!!title && variant === 'responsive' && <label>{title}: </label>}
      {children}
    </TableDataCellStyled>
  );
};

export default TableDataCell;
