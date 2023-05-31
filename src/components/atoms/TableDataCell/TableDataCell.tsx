import { TableDataCellStyled } from './styles/tabledatacell';
import { TableDataCellProps } from './types';

const TableDataCell: React.FC<TableDataCellProps> = ({
  title,
  children,
  variant,
  textAlign = 'left',
}: TableDataCellProps) => {
  return (
    <TableDataCellStyled textAlign={textAlign} variant={variant}>
      {!!title && variant === 'responsive' && <label>{title}: </label>}
      {children}
    </TableDataCellStyled>
  );
};

export default TableDataCell;
