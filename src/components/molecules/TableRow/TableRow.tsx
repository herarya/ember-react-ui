import TableRowStyled from './styles/tablerow';
import { TableRowProps } from './types';

const TableRow: React.FC<TableRowProps> = ({ selected = false, children }: TableRowProps) => {
  return <TableRowStyled selected={selected}>{children}</TableRowStyled>;
};

export default TableRow;
