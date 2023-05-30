import { ColumnStyled } from './styles/column';
import { ColumnProps } from './types';

const Column: React.FC<ColumnProps> = ({
  title,
  children,
  variant,
  textAlign = 'left',
}: ColumnProps) => {
  return (
    <ColumnStyled textAlign={textAlign} variant={variant}>
      {!!title && variant === 'responsive' && <label>{title}: </label>}
      {children}
    </ColumnStyled>
  );
};

export default Column;
