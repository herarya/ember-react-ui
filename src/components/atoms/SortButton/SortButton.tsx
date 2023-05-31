import {
  SortButtonDownStyled,
  SortButtonStyled,
  SortButtonUpStyled,
} from './styles/sortbutton';
import { SortButtonProps } from './types';

const SortButton = ({ id, variant, onClick }: SortButtonProps) => {
  if (variant === 'up') {
    return <SortButtonUpStyled id={id} onClick={onClick} />;
  }
  if (variant === 'down') {
    return <SortButtonDownStyled id={id} onClick={onClick} />;
  }

  return <SortButtonStyled id={id} onClick={onClick} />;
};

export default SortButton;
